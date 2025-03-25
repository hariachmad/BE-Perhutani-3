import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GlobalLogger } from 'src/global-logger/global-logger.service';
import { FetchCounterService } from 'src/fetch-counter/fetch-counter.service';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UsersService, GlobalLogger, FetchCounterService],
  exports: [UsersService],
})
export class UsersModule {}
