/*
  Warnings:

  - Added the required column `updatedAt` to the `geo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `penerimaan_getah` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `penyadap` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ping` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `price` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `tarif_getah` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `tarif_pikul` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `tpg` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "geo" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "penerimaan_getah" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "penyadap" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ping" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "price" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "tarif_getah" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "tarif_pikul" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "tpg" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
