import { ApiProperty } from '@nestjs/swagger';

export class CreateGeoDto {
  @ApiProperty()
  kodeDivisi: string;
  @ApiProperty()
  kodeSatuan: string;
  @ApiProperty()
  kodeArea: string;
  @ApiProperty()
  kodeWilayah: string;
  @ApiProperty()
  kodePetak: string;
  @ApiProperty()
  namaPetak: string;
  @ApiProperty()
  kodeTpg: string;
  @ApiProperty()
  jarak: string;
}
