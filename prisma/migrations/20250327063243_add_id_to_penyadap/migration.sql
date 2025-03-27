/*
  Warnings:

  - The primary key for the `penyadap` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `penyadap` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "penyadap" DROP CONSTRAINT "penyadap_pkey",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "penyadap_pkey" PRIMARY KEY ("id");
