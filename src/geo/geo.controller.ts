import { Controller, Get, UseGuards } from '@nestjs/common';
import { IGeo } from './interface/IGeo';
import { GeoService } from './geo.service';
import { ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiResponse({
  status: 200,
  description: 'Success',
})
@ApiResponse({ status: 403, description: 'Forbidden.' })
@Controller('geo')
export class GeoController {
  constructor(private geoService: GeoService) {}
  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<IGeo[]> {
    return this.geoService.findAll();
  }
}
