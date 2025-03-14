/*
  Warnings:

  - The primary key for the `tarif_getah` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "tarif_getah" DROP CONSTRAINT "tarif_getah_pkey",
ALTER COLUMN "MutuId" SET DATA TYPE TEXT,
ADD CONSTRAINT "tarif_getah_pkey" PRIMARY KEY ("MutuId");
