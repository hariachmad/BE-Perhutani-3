import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
import { LogService } from './log.service';
import { ILog } from './interface/ILog';

@Controller('log')
export class LogController {
  constructor(private readonly logService: LogService) {}
  @Post()
  async create(@Body() createLogDto: CreateLogDto) {
    return this.logService.create(createLogDto);
  }
  @Get()
  async findAll(): Promise<ILog[]> {
    return this.logService.findAll();
  }
}
