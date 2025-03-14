import { Module } from '@nestjs/common';
import { TarifGetahController } from './tarif-getah.controller';
import { TarifGetahService } from './tarif-getah.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GlobalLogger } from 'src/global-logger/global-logger.service';

@Module({
  imports: [PrismaModule],
  controllers: [TarifGetahController],
  providers: [TarifGetahService, GlobalLogger],
  exports: [TarifGetahService],
})
export class TarifGetahModule {}
