import { Injectable } from '@nestjs/common';
import { createInvoice } from './use-case/createInvoice';
import { getDataDto } from './dto/getData.dto';
import * as path from 'path';

@Injectable()
export class PdfServiceService {
  public async createInvoice(dataPenerimaanGetah: getDataDto[]) {
    const uploadPath = path.join(
      __dirname,
      '../',
      '../',
      '/uploads',
      '/filePdf.pdf',
    );
    const success = await createInvoice(dataPenerimaanGetah, uploadPath);
    return success;
  }
}
