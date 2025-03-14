/*
  Warnings:

  - The primary key for the `penerimaan_getah` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "penerimaan_getah" DROP CONSTRAINT "penerimaan_getah_pkey",
ALTER COLUMN "idPenerimaan" DROP NOT NULL,
ADD CONSTRAINT "penerimaan_getah_pkey" PRIMARY KEY ("idtrans");
