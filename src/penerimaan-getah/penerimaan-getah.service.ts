import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PenerimaanGetahDto } from './penerimaan-getah-dto/penerimaan-getah-dto';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { IPenerimaanGetah } from './interface/IPenerimaanGetah';
import { GlobalLogger } from 'src/global-logger/global-logger.service';

@Injectable()
export class PenerimaanGetahService {
  constructor(
    private prismaService: PrismaService,
    private httpService: HttpService,
    private readonly configService: ConfigService,
    private readonly logger: GlobalLogger,
  ) {}

  async findAll(): Promise<IPenerimaanGetah[]> {
    this.logger.log('Request to get all Penerimaan Getah');
    try {
      return await this.prismaService.penerimaan_getah.findMany();
    } catch (error) {
      this.logger.error('Error when get all geo: ', error);
    }
  }

  public async findPrintableData(
    dateRange: string[],
    idk: string,
  ): Promise<any> {
    console.log('Fetching data from Penerimaan Getah Service.');
    console.log(
      'startDate :',
      dateRange[0],
      'endDate : ',
      dateRange[1],
      'idk : ',
      idk,
    );
    const x = dateRange[0];
    const y = dateRange[1];
    const z = idk;
    const query = `SELECT DISTINCT penerimaan_getah.id,penerimaan_getah.mb_idtrans,tpg."namaTpg",users."fullname",penerimaan_getah.mutu,penerimaan_getah.created_at,penerimaan_getah.jumlah,penerimaan_getah.harga_dasar,penerimaan_getah.harga_tambahan,penerimaan_getah.total,penyadap."namaPenyadap" from penerimaan_getah left join tpg on penerimaan_getah.tpg = tpg."kodeTpg" left join penyadap on penerimaan_getah.penyadap = penyadap."idPenyadap" left join users on penerimaan_getah.idk = users.idk where created_at BETWEEN '${x}' AND '${y}' AND penerimaan_getah.idk = '${z}'`;
    const result = await this.prismaService.$queryRawUnsafe(query);
    console.log('result : ', result);
    return result;
  }

  async createPenerimaanGetah(createPenerimaanGetah: IPenerimaanGetah) {
    try {
      const lastCharMbUploadDate = createPenerimaanGetah.mb_upload_date
        .toString()
        .charAt(createPenerimaanGetah.mb_upload_date.toString().length - 1);
      const mbUploadDate =
        lastCharMbUploadDate == 'Z'
          ? createPenerimaanGetah.mb_upload_date
          : createPenerimaanGetah.mb_upload_date +
            'T' +
            createPenerimaanGetah.mb_upload_time +
            'Z';
      this.logger.log(
        'Saving transaction, ID : ' + createPenerimaanGetah.mb_idtrans,
      );
      const lastCharCreatedAt = createPenerimaanGetah.created_at
        .toString()
        .charAt(createPenerimaanGetah.created_at.toString().length - 1);
      const CreatedAt =
        lastCharCreatedAt == 'Z'
          ? createPenerimaanGetah.created_at
          : createPenerimaanGetah.created_at.toString().slice(0, 10) +
            'T' +
            createPenerimaanGetah.mb_upload_time +
            'Z';
      return await this.prismaService.penerimaan_getah.upsert({
        where: { mb_idtrans: createPenerimaanGetah.mb_idtrans },
        update: {
          area: createPenerimaanGetah.area,
          divisi: createPenerimaanGetah.divisi,
          harga_dasar: createPenerimaanGetah.harga_dasar,
          harga_tambahan: createPenerimaanGetah.harga_tambahan,
          idk: createPenerimaanGetah.idk,
          id: createPenerimaanGetah.id,
          mb_imei: createPenerimaanGetah.mb_imei,
          jumlah: createPenerimaanGetah.jumlah,
          mutu: createPenerimaanGetah.mutu,
          penyadap: createPenerimaanGetah.penyadap,
          petak: createPenerimaanGetah.petak,
          satuan: createPenerimaanGetah.satuan,
          total: createPenerimaanGetah.total,
          tpg: createPenerimaanGetah.tpg,
          mb_uuid: createPenerimaanGetah.mb_uuid,
          wilayah: createPenerimaanGetah.wilayah,
          mb_idtrans: createPenerimaanGetah.mb_idtrans,
          mb_upload_by: createPenerimaanGetah.mb_upload_by,
          mb_upload_time: createPenerimaanGetah.mb_upload_time,
          mb_upload_date: mbUploadDate,
        },
        create: {
          ...createPenerimaanGetah,
          mb_upload_date: mbUploadDate,
          created_at: CreatedAt,
        },
      });
    } catch (err) {
      this.logger.error(
        `Error Create Penerimaan Getah : Data yang dikirimkan : ${createPenerimaanGetah}`,
        err,
      );
    }
  }
  async sendPenerimaanGetah(
    sendPenerimaanGetah: PenerimaanGetahDto,
  ): Promise<IPenerimaanGetah | 'Data Already Exist.'> {
    try {
      const bodyFormData = new FormData();
      for (const [key, value] of Object.entries(sendPenerimaanGetah)) {
        bodyFormData.append(key, value);
      }
      const response: any = await lastValueFrom(
        this.httpService.post(
          this.configService.get<string>('POST_PENERIMAAN_GETAH_ENDPOINT'),
          bodyFormData,
          {
            headers: {
              'Api-Key': 'PhtDivisiIT2025!@:)',
            },
          },
        ),
      );
      if (response.data.message == 'Data Already Exist.') {
        return 'Data Already Exist.';
      }
      return response.data.data;
    } catch (err) {
      this.logger.error('Kesalahan saat mengirim data ke Union: ', err);
    }
  }

  async savePenerimaanGetah(penerimaanGetah: IPenerimaanGetah) {
    const lastCharMbUploadDate = penerimaanGetah.mb_upload_date
      .toString()
      .charAt(penerimaanGetah.mb_upload_date.toString().length - 1);
    const mbUploadDate =
      lastCharMbUploadDate == 'Z'
        ? penerimaanGetah.mb_upload_date
        : penerimaanGetah.mb_upload_date +
          'T' +
          penerimaanGetah.mb_upload_time +
          'Z';
    this.logger.log('Saving transaction, ID : ' + penerimaanGetah.mb_idtrans);
    // const lastCharCreatedAt = penerimaanGetah.created_at
    //   .toString()
    //   .charAt(penerimaanGetah.created_at.toString().length - 1);
    // const CreatedAt =
    //   lastCharCreatedAt == 'Z'
    //     ? penerimaanGetah.created_at
    //     : penerimaanGetah.created_at.toISOString().slice(0, 10) +
    //       'T' +
    //       penerimaanGetah.mb_upload_time +
    //       'Z';
    try {
      this.logger.log('Saving transaction, ID : ' + penerimaanGetah.mb_idtrans);
      const result = await this.prismaService.penerimaan_getah.upsert({
        where: { mb_idtrans: penerimaanGetah.mb_idtrans },
        update: {
          area: penerimaanGetah.area,
          divisi: penerimaanGetah.divisi,
          harga_dasar: penerimaanGetah.harga_dasar,
          harga_tambahan: penerimaanGetah.harga_tambahan,
          idk: penerimaanGetah.idk,
          id: penerimaanGetah.id,
          mb_imei: penerimaanGetah.mb_imei,
          jumlah: penerimaanGetah.jumlah,
          mutu: penerimaanGetah.mutu,
          penyadap: penerimaanGetah.penyadap,
          petak: penerimaanGetah.petak,
          satuan: penerimaanGetah.satuan,
          total: penerimaanGetah.total,
          tpg: penerimaanGetah.tpg,
          mb_uuid: penerimaanGetah.mb_uuid,
          wilayah: penerimaanGetah.wilayah,
          mb_idtrans: penerimaanGetah.mb_idtrans,
          mb_upload_by: penerimaanGetah.mb_upload_by,
          mb_upload_time: penerimaanGetah.mb_upload_time,
        },
        create: {
          ...penerimaanGetah,
          mb_upload_date: mbUploadDate,
          created_at: mbUploadDate,
        },
      });
      console.log('result: ', result);
      if (result) {
        this.logger.log('Data berhasil disimpan');
      }
      return result;
    } catch (err) {
      this.logger.error('Error Create Penerimaan Getah : ', err);
    }
  }

  async getIdTransPenerimaanGetah(m_uuid: string): Promise<IPenerimaanGetah> {
    try {
      const result: any = await lastValueFrom(
        this.httpService.get(
          this.configService.get<string>('GET_PENERIMAAN_GETAH_ENDPOINT'),
          {
            params: { mb_uuid: m_uuid },
            headers: {
              'Api-Key': 'PhtDivisiIT2025!@:)',
            },
          },
        ),
      );
      return result;
    } catch (error) {
      this.logger.error('Terjadi error saat penerimaan getah: ', error);
    }
  }
}
