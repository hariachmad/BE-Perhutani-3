/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { IPenerimaanGetah } from 'src/penerimaan-getah/interface/IPenerimaanGetah';
import { PenerimaanGetahService } from 'src/penerimaan-getah/penerimaan-getah.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClient } from '@prisma/client';
import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as PDFDocument from 'pdfkit';
import { join } from 'path';

@Injectable()
export class XlsxService implements OnModuleInit {
  constructor(private penerimaanGetahService: PenerimaanGetahService) {
    if (!fs.existsSync(this.uploadPath)) {
      fs.mkdirSync(this.uploadPath, { recursive: true });
    }
  }
  private readonly uploadPath = join('./uploads');

  public prisma = new PrismaClient();

  public async fetchXlsxData(): Promise<any> {
    console.log('Fetching data from Penerimaan Getah Service.');
    const result = await this.prisma
      .$queryRaw`SELECT penerimaan_getah.id,penerimaan_getah.mb_idtrans,tpg."namaTpg",users."fullname",penerimaan_getah.mutu,penerimaan_getah.jumlah,penerimaan_getah.harga_dasar,penerimaan_getah.harga_tambahan,penerimaan_getah.total,penyadap."namaPenyadap" from penerimaan_getah left join tpg on penerimaan_getah.tpg = tpg."kodeTpg" left join penyadap on penerimaan_getah.penyadap = penyadap."idPenyadap" left join users on penerimaan_getah.idk = users.idk`;
    return result;
  }

  public toSheetFile(rows: any): void {
    console.log('Converting data to sheet file.');
    const worksheet = XLSX.utils.json_to_sheet(rows);
    worksheet['!cols'] = [
      { wch: 12 },
      { wch: 15 },
      { wch: 10 },
      { wch: 15 },
      { wch: 6 },
      { wch: 6 },
      { wch: 10 },
      { wch: 10 },
      { wch: 8 },
      { wch: 12 },
    ];
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Penerimaan Getah');
    XLSX.writeFile(workbook, 'Penerimaan Getah.xlsx', { compression: true });
  }

  public async toPdf(rows: any): Promise<string> {
    const filePath = join(this.uploadPath, 'filePdf.pdf');
    const doc = new PDFDocument();
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);
    rows.map((row) => {
      Object.keys(row).map((key) => {
        doc.text(`${key}: ${row[key]}`);
      });
    });
    console.log('Creating Pdf Successfully');
    doc.end();
    return new Promise((resolve, reject) => {
      stream.on('finish', () => resolve(filePath));
      stream.on('error', reject);
    });
  }

  onModuleInit() {
    // console.log('XlsxService has been initialized.');
    // const newRows: any[] = [];
    // this.fetchXlsxData().then((rows) => {
    //   rows.map((row) => {
    //     newRows.push(row);
    //   });
    //   this.toPdf(newRows);
    // });
  }
}
