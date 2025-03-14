import { Controller, Get } from '@nestjs/common';
import { PricesService } from './prices.service';
import { IPrice } from './interfaces/IPrice';

@Controller('prices')
export class PricesController {
  constructor(private priceService: PricesService) {}
  @Get()
  async findAll(): Promise<IPrice[]> {
    return this.priceService.findAll();
  }
}
