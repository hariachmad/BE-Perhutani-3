import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GlobalLogger } from 'src/global-logger/global-logger.service';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UsersService, GlobalLogger],
  exports: [UsersService],
})
export class UsersModule {}
