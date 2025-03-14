/*
  Warnings:

  - Changed the type of `mb_upload_by` on the `penerimaan_getah` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `mb_upload_date` on the `penerimaan_getah` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "penerimaan_getah" DROP COLUMN "mb_upload_by",
ADD COLUMN     "mb_upload_by" TIMESTAMP(3) NOT NULL,
DROP COLUMN "mb_upload_date",
ADD COLUMN     "mb_upload_date" TIMESTAMP(3) NOT NULL;
