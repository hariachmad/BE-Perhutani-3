import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { IPrice } from './interfaces/IPrice';
import { CreatePriceDto } from './price.dto/create-price.dto';

@Injectable()
export class PricesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<IPrice[]> {
    return await this.prisma.price.findMany();
  }

  async UpsertPrices(createPriceDto: CreatePriceDto) {
    return this.prisma.price.upsert({
      where: { no: createPriceDto.no },
      update: {
        harga: createPriceDto.harga,
        datetime: createPriceDto.datetime,
      },
      create: createPriceDto,
    });
  }
}
