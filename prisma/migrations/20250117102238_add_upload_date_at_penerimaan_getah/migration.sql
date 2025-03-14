/*
  Warnings:

  - Added the required column `mb_upload_date` to the `penerimaan_getah` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "penerimaan_getah" ADD COLUMN     "mb_upload_date" TEXT NOT NULL;
