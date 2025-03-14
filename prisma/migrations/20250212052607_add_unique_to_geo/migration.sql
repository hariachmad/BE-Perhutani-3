/*
  Warnings:

  - A unique constraint covering the columns `[kodePetak]` on the table `geo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "geo_kodePetak_key" ON "geo"("kodePetak");
