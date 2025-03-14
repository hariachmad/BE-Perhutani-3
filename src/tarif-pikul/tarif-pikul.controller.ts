import { Controller, Get, UseGuards } from '@nestjs/common';
import { TarifPikulService } from './tarif-pikul.service';
import { ITarifPikul } from './interface/ITarifPikul';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('tarif-pikul')
export class TarifPikulController {
  constructor(private tarifPikulService: TarifPikulService) {}

  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<ITarifPikul[]> {
    return this.tarifPikulService.findAll();
  }
}
