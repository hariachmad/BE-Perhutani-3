import { Module } from '@nestjs/common';
import { XlsxController } from './xlsx.controller';
import { XlsxService } from './xlsx.service';
import { PenerimaanGetahService } from 'src/penerimaan-getah/penerimaan-getah.service';
import { PenerimaanGetahModule } from 'src/penerimaan-getah/penerimaan-getah.module';

@Module({
  imports: [PenerimaanGetahModule],
  controllers: [XlsxController],
  providers: [XlsxService],
})
export class XlsxModule {}
