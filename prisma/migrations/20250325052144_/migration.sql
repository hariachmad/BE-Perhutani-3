/*
  Warnings:

  - A unique constraint covering the columns `[date]` on the table `fetchCounter` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "fetchCounter_date_key" ON "fetchCounter"("date");
