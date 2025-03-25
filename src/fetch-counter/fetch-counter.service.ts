import { Injectable } from '@nestjs/common';
import { GlobalLogger } from 'src/global-logger/global-logger.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FetchCounterService {
  constructor(
    private prismaService: PrismaService,
    private readonly logger: GlobalLogger,
  ) {}

  public async increment(date: string): Promise<any> {
    const fetchCounter = this.prismaService.fetchCounter.upsert({
      where: {
        date: date,
      },
      update: {
        count: {
          increment: 1,
        },
      },
      create: {
        date: date,
        count: 1,
      },
    });

    return fetchCounter;
  }

  public async get(date: string): Promise<number> {
    try {
      const result = this.prismaService.fetchCounter.findFirst({
        where: {
          date: date,
        },
      });
      return (await result).count;
    } catch (err) {
      this.logger.log('Error get fetch Counter: ' + err);
    }
  }
}
