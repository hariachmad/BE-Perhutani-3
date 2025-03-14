import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ITarifPikul } from './interface/ITarifPikul';
import { CreateTarifPikulDto } from './create-tarif-pikul-dto/create-tarif-pikul-dto';
import { GlobalLogger } from 'src/global-logger/global-logger.service';

@Injectable()
export class TarifPikulService {
  constructor(
    private prisma: PrismaService,
    private readonly logger: GlobalLogger,
  ) {}

  async findAll(): Promise<ITarifPikul[]> {
    this.logger.log('Request FindAll Tarif Pikul');
    try {
      return await this.prisma.tarif_pikul.findMany();
    } catch (error) {
      this.logger.error('Error when get all tarif_pikul: ', error);
    }
  }

  async Upsert(createTarifPikulDto: CreateTarifPikulDto) {
    try {
      return await this.prisma.tarif_pikul.upsert({
        where: { Jarak: createTarifPikulDto.Jarak },
        update: {
          Tarif: createTarifPikulDto.Tarif,
        },
        create: createTarifPikulDto,
      });
    } catch (error) {
      this.logger.error('Error when upsert tarif_pikul: ', error);
    }
  }
}
