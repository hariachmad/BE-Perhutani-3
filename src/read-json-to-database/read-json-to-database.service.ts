import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as fs from 'fs';
import * as path from 'path';
import { IImeiHasGeo } from './IImeiHasGeo/IImeiHasGeo';
import { GlobalLogger } from 'src/global-logger/global-logger.service';

@Injectable()
export class ReadJsonToDatabaseService implements OnModuleInit {
  constructor(
    private readonly prisma: PrismaService,
    private readonly logger: GlobalLogger,
  ) {}

  async readFileAndSaveToDatabase(filePath: string): Promise<void> {
    const absolutePath = path.resolve(filePath);
    const fileContent = fs.readFileSync(absolutePath, 'utf-8');
    const items = JSON.parse(fileContent);

    for (const item of items) {
      await this.prisma.imeiHasGeo.upsert({
        where: { imei: item.imei },
        update: {
          kodeWilayah: item.kodeWilayah,
        },
        create: item,
      });
    }
  }

  async findAll(): Promise<IImeiHasGeo[]> {
    try {
      return await this.prisma.imeiHasGeo.findMany();
    } catch (error) {
      this.logger.error('Error when get all penyadap: ', error);
    }
  }

  onModuleInit() {
    this.readFileAndSaveToDatabase('./imeiHasGeo.json');
  }
}
