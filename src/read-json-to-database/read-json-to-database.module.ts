import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ReadJsonToDatabaseService } from './read-json-to-database.service';
import { GlobalLogger } from 'src/global-logger/global-logger.service';
import { ConfigService } from '@nestjs/config';
import { ReadJsonToDatabaseController } from './read-json-to-database.controller';

@Module({
  imports: [PrismaModule, HttpModule],
  controllers: [ReadJsonToDatabaseController],
  providers: [ReadJsonToDatabaseService, GlobalLogger, ConfigService],
  exports: [ReadJsonToDatabaseService],
})
export class ReadJsonToDatabaseModule {}
