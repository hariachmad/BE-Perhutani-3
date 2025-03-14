import { Injectable } from '@nestjs/common';
import { ITarifGetah } from './interface/ITarifGetah';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTarifGetahDto } from './create-tarif-getah-dto/create-tarif-getah-dto';
import { GlobalLogger } from 'src/global-logger/global-logger.service';

@Injectable()
export class TarifGetahService {
  constructor(
    private prisma: PrismaService,
    private readonly logger: GlobalLogger,
  ) {}

  async findAll(): Promise<ITarifGetah[]> {
    this.logger.log('Request to get all tarif_getah');
    try {
      return await this.prisma.tarif_getah.findMany();
    } catch (error) {
      this.logger.error('Error when get all tarif_getah: ', error);
    }
  }

  async Upsert(createTarifGetahDto: CreateTarifGetahDto) {
    try {
      return await this.prisma.tarif_getah.upsert({
        where: { MutuId: createTarifGetahDto.MutuId },
        update: {
          MutuNama: createTarifGetahDto.MutuNama,
          TarifPungut: createTarifGetahDto.TarifPungut,
          TarifSarpra: createTarifGetahDto.TarifSarpra,
        },
        create: createTarifGetahDto,
      });
    } catch (error) {
      this.logger.error('Error when upsert tarif_getah, Retrying: ', error);
      this.Upsert(createTarifGetahDto);
    }
  }
}
