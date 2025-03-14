import { Controller, Get } from '@nestjs/common';
import { ApiConsumes } from '@nestjs/swagger';
import { readdirSync } from 'fs';
import { join } from 'path';
import { GlobalLogger } from 'src/global-logger/global-logger.service';

@ApiConsumes('multipart/form-data')
@Controller('files')
export class FilesController {
  constructor(private readonly logger: GlobalLogger) {}
  @Get()
  getFiles() {
    this.logger.log('Request to get all files list');
    const directoyPath = join(__dirname, '..', '..', 'client');
    const files = readdirSync(directoyPath);
    return files;
  }
}
