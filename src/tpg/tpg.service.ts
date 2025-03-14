import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ITpg } from './interface/ITpg';
import { CreateTpgDto } from './dto/tpg.dto';
import { GlobalLogger } from 'src/global-logger/global-logger.service';

@Injectable()
export class TpgService {
  constructor(
    private prisma: PrismaService,
    private readonly logger: GlobalLogger,
  ) {}

  async findAll(): Promise<ITpg[]> {
    this.logger.log('Request to get all tpg');
    try {
      return await this.prisma.tpg.findMany();
    } catch (error) {
      this.logger.error('Error when get all tpg: ', error);
    }
  }

  async Upsert(createTpgDto: CreateTpgDto) {
    try {
      return await this.prisma.tpg.upsert({
        where: { kodeTpg: createTpgDto.kodeTpg },
        update: {
          jenisTpg: createTpgDto.jenisTpg,
          namaTpg: createTpgDto.namaTpg,
        },
        create: createTpgDto,
      });
    } catch (error) {
      this.logger.error('Error when upsert tpg, Retrying: ', error);
      this.Upsert(createTpgDto);
    }
  }
}
