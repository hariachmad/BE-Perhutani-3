import {
  Body,
  Controller,
  Get,
  Ip,
  Res,
  Post,
  UseGuards,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { PenerimaanGetahDto } from './penerimaan-getah-dto/penerimaan-getah-dto';
import { PenerimaanGetahService } from './penerimaan-getah.service';
import { IPenerimaanGetah } from './interface/IPenerimaanGetah';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from 'src/auth/auth.guard';
import { GlobalLogger } from 'src/global-logger/global-logger.service';
import { PdfServiceService } from 'src/pdf-service/pdf-service.service';
import * as path from 'path';
import * as fs from 'fs';
import { Response } from 'express';
import { start } from 'repl';

@Controller('penerimaan-getah')
export class PenerimaanGetahController {
  constructor(
    private penerimaanGetahService: PenerimaanGetahService,
    private readonly configService: ConfigService,
    private readonly logger: GlobalLogger,
    private readonly pdfService: PdfServiceService,
  ) {}

  async savePenerimaanGetah(savePenerimaanGetah: IPenerimaanGetah) {
    const result =
      await this.penerimaanGetahService.savePenerimaanGetah(
        savePenerimaanGetah,
      );
    if (result) {
      return {
        id: savePenerimaanGetah.id,
        m_petak: savePenerimaanGetah.petak,
        m_tpg: savePenerimaanGetah.tpg,
        m_penyadap: savePenerimaanGetah.penyadap,
        m_mutu: savePenerimaanGetah.mutu,
        m_jumlah: savePenerimaanGetah.jumlah,
        m_harga_dasar: savePenerimaanGetah.harga_dasar,
        m_harga_tambahan: savePenerimaanGetah.harga_tambahan,
        m_total: savePenerimaanGetah.total,
        m_idtrans: savePenerimaanGetah.mb_idtrans,
        m_imei: savePenerimaanGetah.mb_imei,
        m_upload_by: savePenerimaanGetah.mb_upload_by,
        m_upload_time: savePenerimaanGetah.mb_upload_time,
        m_upload_date: savePenerimaanGetah.mb_upload_date,
        m_uuid: savePenerimaanGetah.mb_uuid,
        // npk: this.configService.get<string>('NPK'),
        npk: savePenerimaanGetah.npk,
      };
    } else {
      throw new Error('Error creating Transksi');
    }
  }

  async getIdTransPenerimaanGetah(m_uuid: string): Promise<IPenerimaanGetah> {
    const result: any =
      await this.penerimaanGetahService.getIdTransPenerimaanGetah(m_uuid);
    return result.data.data[0];
  }

  async createPenerimaanGetah(
    createPenerimaanGetah: IPenerimaanGetah,
  ): Promise<PenerimaanGetahDto> {
    const result = await this.penerimaanGetahService.createPenerimaanGetah(
      createPenerimaanGetah,
    );
    console.log('result: ', result);
    if (result) {
      return {
        id: createPenerimaanGetah.id,
        m_petak: createPenerimaanGetah.petak,
        m_tpg: createPenerimaanGetah.tpg,
        m_penyadap: createPenerimaanGetah.penyadap,
        m_mutu: createPenerimaanGetah.mutu,
        m_jumlah: createPenerimaanGetah.jumlah,
        m_harga_dasar: createPenerimaanGetah.harga_dasar,
        m_harga_tambahan: createPenerimaanGetah.harga_tambahan,
        m_total: createPenerimaanGetah.total,
        m_idtrans: createPenerimaanGetah.mb_idtrans,
        m_imei: createPenerimaanGetah.mb_imei,
        m_upload_by: createPenerimaanGetah.mb_upload_by,
        m_upload_time: createPenerimaanGetah.mb_upload_time,
        m_upload_date: createPenerimaanGetah.mb_upload_date,
        m_uuid: createPenerimaanGetah.mb_uuid,
        // npk: this.configService.get<string>('NPK'),
        npk: createPenerimaanGetah.npk,
      };
    } else {
      throw new Error('Error creating Transksi');
    }
  }

  async sendPenerimaanGetah(
    sendPenerimaanGetah: PenerimaanGetahDto,
  ): Promise<IPenerimaanGetah | 'Data Already Exist.'> {
    const result =
      await this.penerimaanGetahService.sendPenerimaanGetah(
        sendPenerimaanGetah,
      );
    return result;
  }

  @Get('countByMandorByDate')
  public async countForemanByTime(
    @Query('idk') idMandor: number,
    @Query('startDate') startDate: Date,
    @Query('endDate') endDate: Date,
  ): Promise<any> {
    console.log(
      'idMandor: ',
      idMandor,
      ' startDate: ',
      startDate,
      'endDate: ',
      endDate,
    );
    const results: [] = await this.penerimaanGetahService.findByMandorDate(
      idMandor,
      startDate,
      endDate,
    );
    return results.length;
  }

  @Get('getAllByDate')
  public async getAllByDate(
    @Query('startDate') startDate: Date,
    @Query('endDate') endDate: Date,
  ): Promise<any> {
    const results: IPenerimaanGetah[] =
      await this.penerimaanGetahService.findAllByDate(startDate, endDate);
    return results;
  }

  @Get('countAllByDate')
  public async countAllByDate(
    @Query('startDate') startDate: Date,
    @Query('endDate') endDate: Date,
  ): Promise<any> {
    const results: [] = await this.penerimaanGetahService.findAllByDate(
      startDate,
      endDate,
    );
    return results.length;
  }

  @Get('pdf')
  public async findPrintableData(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
    @Query('idk') idk: string,
    @Res() res: Response,
  ): Promise<any> {
    const result = await this.penerimaanGetahService.findPrintableData(
      [startDate, endDate],
      idk,
    );

    const success = await this.pdfService.createInvoice(result);
    if (success) {
      const filePath = path.join(__dirname, '../../uploads/filePdf.pdf');
      let file;
      try {
        file = fs.createReadStream(filePath);
      } catch (err) {
        throw new NotFoundException('Server Busy, Silahkan coba kembali');
      }

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader(
        'Content-Disposition',
        `attachment; filename=${'this.penerimaanGetahService.pdf'}`,
      );

      setTimeout(() => {
        console.log('Selesai setelah 2 detik');
        file.pipe(res);
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error('Gagal menghapus file:', err);
          } else {
            console.log('File berhasil dihapus');
          }
        });
      }, 2000);
    } else {
      throw new NotFoundException('Data tidak ditemukan');
    }
  }

  @UseGuards(AuthGuard)
  @Post()
  async createAndSend(
    @Body() createPenerimaanGetah: PenerimaanGetahDto,
    @Ip() ip: string,
  ) {
    const result: IPenerimaanGetah | 'Data Already Exist.' =
      await this.sendPenerimaanGetah(createPenerimaanGetah);
    this.logger.log(
      result
        ? `Client Posting with IP : ${ip}, Success`
        : `Client Posting with IP : ${ip}, Failed`,
    );

    console.log('result : ', result);

    if (typeof result == 'string') {
      const response = await this.getIdTransPenerimaanGetah(
        createPenerimaanGetah.m_uuid,
      );
      console.log('getIdTransPenerimaanGetah', response);
      const payload = await this.savePenerimaanGetah(response);
      console.log('payload : ', payload);
      return { ...payload, npk: '-' };
    }

    const payload = await this.createPenerimaanGetah(result);
    return { ...payload, npk: '-' };
  }
}
