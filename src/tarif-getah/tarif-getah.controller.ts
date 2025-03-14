import { Controller, Get, UseGuards } from '@nestjs/common';
import { TarifGetahService } from './tarif-getah.service';
import { ITarifGetah } from './interface/ITarifGetah';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('tarif-getah')
export class TarifGetahController {
  constructor(private tarifGetahService: TarifGetahService) {}

  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<ITarifGetah[]> {
    return this.tarifGetahService.findAll();
  }
}
