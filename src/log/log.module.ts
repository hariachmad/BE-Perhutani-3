import { Module } from '@nestjs/common';
import { LogController } from './log.controller';
import { LogService } from './log.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [LogController],
  providers: [LogService],
  imports: [PrismaModule],
  exports: [LogService],
})
export class LogModule {}
