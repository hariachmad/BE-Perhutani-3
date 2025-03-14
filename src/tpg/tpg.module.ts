import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TpgController } from './tpg.controller';
import { TpgService } from './tpg.service';
import { GlobalLogger } from 'src/global-logger/global-logger.service';

@Module({
  imports: [PrismaModule],
  controllers: [TpgController],
  providers: [TpgService, GlobalLogger],
  exports: [TpgService],
})
export class TpgModule {}
