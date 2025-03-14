import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';
import { GlobalLogger } from 'src/global-logger/global-logger.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly logger: GlobalLogger) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: join(__dirname, '..', '..', 'client'),
        filename: (req, file, callback) => {
          callback(null, file.originalname);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    this.logger.log('Uploaded file: ' + file.originalname);

    return {
      filename: file.filename,
      originalname: file.originalname,
      path: file.path,
    };
  }
}
