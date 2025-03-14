import { Module } from '@nestjs/common';
import { TarifPikulService } from './tarif-pikul.service';
import { TarifPikulController } from './tarif-pikul.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GlobalLogger } from 'src/global-logger/global-logger.service';

@Module({
  imports: [PrismaModule],
  providers: [TarifPikulService, GlobalLogger],
  controllers: [TarifPikulController],
  exports: [TarifPikulService],
})
export class TarifPikulModule {}
