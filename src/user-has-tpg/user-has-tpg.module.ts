import { Module } from '@nestjs/common';
import { UserHasTpgService } from './user-has-tpg.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { GlobalLogger } from 'src/global-logger/global-logger.service';

@Module({
  imports: [HttpModule],
  providers: [UserHasTpgService, ConfigService, GlobalLogger],
  exports: [UserHasTpgService],
})
export class UserHasTpgModule {}
