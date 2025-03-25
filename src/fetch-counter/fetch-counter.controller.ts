import { Controller, Get, Query } from '@nestjs/common';
import { FetchCounterService } from './fetch-counter.service';

@Controller('fetch-counter')
export class FetchCounterController {
  constructor(private fetchCounterService: FetchCounterService) {}

  @Get('date')
  public async get(@Query('date') date: string): Promise<number> {
    const result: number = await this.fetchCounterService.get(date);
    return result;
  }
}
