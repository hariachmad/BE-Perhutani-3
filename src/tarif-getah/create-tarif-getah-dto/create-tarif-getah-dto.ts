import { Prisma } from '@prisma/client';

export class CreateTarifGetahDto {
  MutuId: string;
  MutuNama: string;
  TarifPungut: Prisma.Decimal;
  TarifSarpra: string;
}
