/*
  Warnings:

  - Changed the type of `datetime` on the `Price` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Price" DROP COLUMN "datetime",
ADD COLUMN     "datetime" TIMESTAMP(3) NOT NULL;
