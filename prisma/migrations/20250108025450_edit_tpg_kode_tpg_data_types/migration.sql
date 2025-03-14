/*
  Warnings:

  - The primary key for the `tpg` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "tpg" DROP CONSTRAINT "tpg_pkey",
ALTER COLUMN "kodeTpg" SET DATA TYPE TEXT,
ADD CONSTRAINT "tpg_pkey" PRIMARY KEY ("kodeTpg");
