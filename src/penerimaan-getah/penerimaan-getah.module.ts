import { Module } from '@nestjs/common';
import { PenerimaanGetahService } from './penerimaan-getah.service';
import { HttpModule } from '@nestjs/axios';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GlobalLogger } from 'src/global-logger/global-logger.service';
import { PenerimaanGetahController } from './penerimaan-getah.controller';
import { PdfServiceService } from 'src/pdf-service/pdf-service.service';

@Module({
  imports: [HttpModule, PrismaModule],
  controllers: [PenerimaanGetahController],
  providers: [PenerimaanGetahService, GlobalLogger, PdfServiceService],
  exports: [PenerimaanGetahService],
})
export class PenerimaanGetahModule {}
