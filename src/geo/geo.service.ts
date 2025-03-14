import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { IGeo } from './interface/IGeo';
import { CreateGeoDto } from './create-geo-dto/create-geo-dto';
import { GlobalLogger } from 'src/global-logger/global-logger.service';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GeoService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private prisma: PrismaService,
    private readonly logger: GlobalLogger,
  ) {}

  async findAll(): Promise<IGeo[]> {
    this.logger.log('Request to get all geo');
    try {
      return this.prisma.geo.findMany();
    } catch (error) {
      this.logger.error('Error when get all geo: ', error);
    }
  }

  async deleteGeo() {
    try {
      return this.prisma.geo.deleteMany();
    } catch (error) {
      this.logger.error('Error when delete all geo: ', error);
    }
  }

  async createGeo(createGeoDto: CreateGeoDto[]) {
    this.logger.log('Request to create geo');
    try {
      return this.prisma.geo.createMany({ data: createGeoDto });
    } catch (error) {
      this.logger.error('Error when create geo: ', error);
    }
  }

  async selectAllEGeo() {
    this.logger.log('Request to select all geo');
    try {
      return this.prisma.geo.findMany();
    } catch (error) {
      this.logger.error('Error when select all geo: ', error);
    }
  }

  async fetchGeo(npk: string, retries = 20, delay = 10000) {
    try {
      const responseGeo: any = await firstValueFrom(
        this.httpService.get(
          this.configService.get<string>('TARIF_GEO_NEW_ENDPOINT') + npk,
          {
            headers: {
              'Api-Key': `${this.configService.get<string>('TOKEN')}`,
            },
          },
        ),
      );
      return responseGeo;
    } catch (err) {
      if (retries > 1) {
        console.log(`Retrying... (${retries - 1} retries left)`);
        await new Promise((resolve) => setTimeout(resolve, delay));
        return this.fetchGeo(npk, retries - 1, delay);
      } else {
        this.logger.error('Error saat fetch GEO: ', err);
      }
    }
  }

  async Upsert(createGeoDto: CreateGeoDto) {
    try {
      return await this.prisma.geo.upsert({
        where: { kodePetak: createGeoDto.kodePetak },
        update: {
          jarak: createGeoDto.jarak,
          kodeArea: createGeoDto.kodeArea,
          kodeDivisi: createGeoDto.kodeDivisi,
          kodeSatuan: createGeoDto.kodeSatuan,
          kodeTpg: createGeoDto.kodeTpg,
          kodeWilayah: createGeoDto.kodeWilayah,
          namaPetak: createGeoDto.namaPetak,
        },
        create: createGeoDto,
      });
    } catch (error) {
      this.logger.error('Error when upsert GEO, Retrying : ', error);
      this.Upsert(createGeoDto);
    }
  }
}
