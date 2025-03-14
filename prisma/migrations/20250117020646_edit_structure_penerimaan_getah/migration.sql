/*
  Warnings:

  - The primary key for the `penerimaan_getah` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idPenerimaan` on the `penerimaan_getah` table. All the data in the column will be lost.
  - You are about to drop the column `idtrans` on the `penerimaan_getah` table. All the data in the column will be lost.
  - You are about to drop the column `imei` on the `penerimaan_getah` table. All the data in the column will be lost.
  - You are about to drop the column `uuid` on the `penerimaan_getah` table. All the data in the column will be lost.
  - Added the required column `created_at` to the `penerimaan_getah` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mb_idtrans` to the `penerimaan_getah` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mb_imei` to the `penerimaan_getah` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mb_upload_by` to the `penerimaan_getah` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mb_upload_time` to the `penerimaan_getah` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mb_uuid` to the `penerimaan_getah` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "penerimaan_getah" DROP CONSTRAINT "penerimaan_getah_pkey",
DROP COLUMN "idPenerimaan",
DROP COLUMN "idtrans",
DROP COLUMN "imei",
DROP COLUMN "uuid",
ADD COLUMN     "created_at" TEXT NOT NULL,
ADD COLUMN     "id" TEXT,
ADD COLUMN     "mb_idtrans" TEXT NOT NULL,
ADD COLUMN     "mb_imei" TEXT NOT NULL,
ADD COLUMN     "mb_upload_by" TEXT NOT NULL,
ADD COLUMN     "mb_upload_time" TEXT NOT NULL,
ADD COLUMN     "mb_uuid" TEXT NOT NULL,
ADD CONSTRAINT "penerimaan_getah_pkey" PRIMARY KEY ("mb_idtrans");
