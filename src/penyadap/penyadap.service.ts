import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { IPenyadap } from './interface/IPenyadap';
import { CreatePenyadapDto } from './create-penyadap-dto/create-penyadap-dto';
import { GlobalLogger } from 'src/global-logger/global-logger.service';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PenyadapService {
  constructor(
    private prisma: PrismaService,
    private readonly logger: GlobalLogger,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async findAll(): Promise<IPenyadap[]> {
    // this.logger.log('Request to get all penyadap');
    try {
      return await this.prisma.penyadap.findMany();
    } catch (error) {
      this.logger.error('Error when get all penyadap: ', error);
    }
  }

  async Upsert(createPenyadapDto: CreatePenyadapDto) {
    try {
      const updatedPenyadapAndPetak = await this.prisma.penyadap.updateMany({
        where: {
          idPenyadap: createPenyadapDto.idPenyadap,
          kodePetak: createPenyadapDto.kodePetak,
        },
        data: createPenyadapDto,
      });

      if (updatedPenyadapAndPetak.count === 0) {
        return await this.prisma.penyadap.create({
          data: createPenyadapDto,
        });
      }

      return await this.prisma.penyadap.findFirst({
        where: {
          idPenyadap: createPenyadapDto.idPenyadap,
          kodePetak: createPenyadapDto.kodePetak,
        },
      });
    } catch (error) {
      this.logger.log(
        `Error when create penyadap ${createPenyadapDto.idPenyadap} , Retrying, ${error}`,
      );
      this.Upsert(createPenyadapDto);
    }

    // return await this.prisma.penyadap.upsert({
    //   where: {
    //     idPenyadap: createPenyadapDto.idPenyadap,
    //   },
    //   update: {
    //     kodeTpg: createPenyadapDto.kodeTpg,
    //     namaPenyadap: createPenyadapDto.namaPenyadap,
    //   },
    //   create: createPenyadapDto,
    // });
  }

  async fetchPenyadap(npk: string, retries = 20, delay = 10000) {
    try {
      const responsePenyadap: any = await firstValueFrom(
        this.httpService.get(
          this.configService.get<string>('TARIF_PENYADAP_NEW_ENDPOINT') + npk,
          {
            headers: {
              'Api-Key': `${this.configService.get<string>('TOKEN')}`,
            },
          },
        ),
      );
      return responsePenyadap;
    } catch (err) {
      if (retries > 1) {
        console.log(`Retrying... (${retries - 1} retries left)`);
        await new Promise((resolve) => setTimeout(resolve, delay));
        return this.fetchPenyadap(npk, retries - 1, delay);
      } else {
        this.logger.error('Error saat fetch Penyadap: ', err);
      }
    }
  }
}
