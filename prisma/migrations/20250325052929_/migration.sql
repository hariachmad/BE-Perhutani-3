/*
  Warnings:

  - The primary key for the `fetchCounter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `fetchCounter` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "fetchCounter" DROP CONSTRAINT "fetchCounter_pkey",
DROP COLUMN "id";
