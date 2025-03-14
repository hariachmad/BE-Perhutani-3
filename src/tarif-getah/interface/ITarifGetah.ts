import { Prisma } from '@prisma/client';

export interface ITarifGetah {
  MutuId: string;
  MutuNama: string;
  TarifPungut: Prisma.Decimal;
  TarifSarpra: string;
}
