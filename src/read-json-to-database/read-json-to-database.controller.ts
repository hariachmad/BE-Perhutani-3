import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ReadJsonToDatabaseService } from './read-json-to-database.service';
import { GlobalLogger } from 'src/global-logger/global-logger.service';
import { AuthGuard } from '@nestjs/passport';
import { IImeiHasGeo } from './IImeiHasGeo/IImeiHasGeo';

@Controller('read-json-to-database')
export class ReadJsonToDatabaseController {
  constructor(
    private readJsonToDatabaseService: ReadJsonToDatabaseService,
    private readonly logger: GlobalLogger,
  ) {}

  @Get()
  async findAll(): Promise<IImeiHasGeo[]> {
    return this.readJsonToDatabaseService.findAll();
  }
}
