import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { PenyadapService } from './penyadap.service';
import { IPenyadap } from './interface/IPenyadap';
import { AuthGuard } from 'src/auth/auth.guard';
import { GlobalLogger } from 'src/global-logger/global-logger.service';

@Controller('penyadap')
export class PenyadapController {
  constructor(
    private penyadapService: PenyadapService,
    private readonly logger: GlobalLogger,
  ) {}

  @UseGuards(AuthGuard)
  @Get()
  async findAll(@Request() req): Promise<IPenyadap[]> {
    return this.penyadapService.findAll();
  }
}
