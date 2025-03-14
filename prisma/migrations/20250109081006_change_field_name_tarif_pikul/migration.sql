/*
  Warnings:

  - You are about to drop the column `jarak` on the `tarif_pikul` table. All the data in the column will be lost.
  - You are about to drop the column `tarif` on the `tarif_pikul` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[Jarak]` on the table `tarif_pikul` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Jarak` to the `tarif_pikul` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Tarif` to the `tarif_pikul` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "tarif_pikul_jarak_key";

-- AlterTable
ALTER TABLE "tarif_pikul" DROP COLUMN "jarak",
DROP COLUMN "tarif",
ADD COLUMN     "Jarak" TEXT NOT NULL,
ADD COLUMN     "Tarif" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "tarif_pikul_Jarak_key" ON "tarif_pikul"("Jarak");
