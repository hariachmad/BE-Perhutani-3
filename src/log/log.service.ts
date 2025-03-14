import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLogDto } from './dto/create-log.dto';
import { ILog } from './interface/ILog';

@Injectable()
export class LogService {
  constructor(private prisma: PrismaService) {}

  async create(createLogDto: CreateLogDto) {
    return this.prisma.log.create({
      data: createLogDto,
    });
  }

  async findAll(): Promise<ILog[]> {
    return await this.prisma.log.findMany();
  }
}
