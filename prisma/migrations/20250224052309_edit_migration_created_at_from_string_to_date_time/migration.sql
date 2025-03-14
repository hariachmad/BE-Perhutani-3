/*
  Warnings:

  - The `created_at` column on the `penerimaan_getah` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "penerimaan_getah" DROP COLUMN "created_at",
ADD COLUMN     "created_at" TIMESTAMP(3);
