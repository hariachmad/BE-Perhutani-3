import { Module } from '@nestjs/common';
import { PenyadapController } from './penyadap.controller';
import { PenyadapService } from './penyadap.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GlobalLogger } from 'src/global-logger/global-logger.service';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [PrismaModule, HttpModule],
  controllers: [PenyadapController],
  providers: [PenyadapService, GlobalLogger, ConfigService],
  exports: [PenyadapService],
})
export class PenyadapModule {}
