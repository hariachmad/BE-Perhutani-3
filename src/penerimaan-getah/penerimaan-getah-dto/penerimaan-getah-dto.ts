// import { Transform } from 'class-transformer';
// import { IsNumberString, IsString } from 'class-validator';

export class PenerimaanGetahDto {
  // @IsString({ message: 'Field harus berupa string' })
  // @IsNumberString(
  //   {},
  //   {
  //     message:
  //       'Field m_petak harus berupa angka dan tidak boleh mengandung huruf atau karakter lain',
  //   },
  // )
  m_petak: string;

  // @IsString({ message: 'Field harus berupa string' })
  // @IsNumberString(
  //   {},
  //   {
  //     message:
  //       'Field m_tpg harus berupa angka dan tidak boleh mengandung huruf atau karakter lain',
  //   },
  // )
  m_tpg: string;

  // @IsString({ message: 'Field harus berupa string' })
  // @IsNumberString(
  //   {},
  //   {
  //     message:
  //       'Field m_penyadap harus berupa angka dan tidak boleh mengandung huruf atau karakter lain',
  //   },
  // )
  m_penyadap: string;

  // @IsString({ message: 'Field harus berupa string' })
  // @IsNumberString(
  //   {},
  //   {
  //     message:
  //       'Field m_mutu harus berupa angka dan tidak boleh mengandung huruf atau karakter lain',
  //   },
  // )
  m_mutu: string;

  // @IsString({ message: 'Field harus berupa string' })
  // @IsNumberString(
  //   {},
  //   {
  //     message:
  //       'Field m_jumlah harus berupa angka dan tidak boleh mengandung huruf atau karakter lain',
  //   },
  // )
  m_jumlah: string;

  // @IsString({ message: 'Field harus berupa string' })
  // @IsNumberString(
  //   {},
  //   {
  //     message:
  //       'Field m_harga_dasar harus berupa angka dan tidak boleh mengandung huruf atau karakter lain',
  //   },
  // )
  m_harga_dasar: string;

  // @IsString({ message: 'Field harus berupa string' })
  // @IsNumberString(
  //   {},
  //   {
  //     message:
  //       'Field m_harga_tambahan harus berupa angka dan tidak boleh mengandung huruf atau karakter lain',
  //   },
  // )
  m_harga_tambahan: string;

  // @IsString({ message: 'Field harus berupa string' })
  // @IsNumberString(
  //   {},
  //   {
  //     message:
  //       'Field m_total harus berupa angka dan tidak boleh mengandung huruf atau karakter lain',
  //   },
  // )
  m_total: string;

  m_idtrans: string;
  m_uuid: string;
  m_imei: string;
  m_upload_by: string;
  m_upload_date: Date;
  m_upload_time: string;

  // @IsString({ message: 'Field harus berupa string' })
  // @IsNumberString(
  //   {},
  //   {
  //     message:
  //       'Field npk harus berupa angka dan tidak boleh mengandung huruf atau karakter lain',
  //   },
  // )
  npk: string;
  id?: string;
}
