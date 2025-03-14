/*
  Warnings:

  - You are about to drop the column `mutu` on the `price` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "price" DROP COLUMN "mutu",
ALTER COLUMN "harga" SET DATA TYPE TEXT;
