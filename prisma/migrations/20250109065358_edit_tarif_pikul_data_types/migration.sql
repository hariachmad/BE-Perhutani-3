/*
  Warnings:

  - The primary key for the `tarif_pikul` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `tarif_pikul` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[jarak]` on the table `tarif_pikul` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "tarif_pikul" DROP CONSTRAINT "tarif_pikul_pkey",
DROP COLUMN "id";

-- CreateIndex
CREATE UNIQUE INDEX "tarif_pikul_jarak_key" ON "tarif_pikul"("jarak");
