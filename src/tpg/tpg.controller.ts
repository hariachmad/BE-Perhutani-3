import { Controller, Get, UseGuards } from '@nestjs/common';
import { TpgService } from './tpg.service';
import { ITpg } from './interface/ITpg';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('tpg')
export class TpgController {
  constructor(private tpgService: TpgService) {}

  @Get()
  async findAll(): Promise<ITpg[]> {
    return this.tpgService.findAll();
  }
}
