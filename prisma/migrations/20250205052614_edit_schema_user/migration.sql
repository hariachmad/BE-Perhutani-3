/*
  Warnings:

  - You are about to drop the column `tpg` on the `user` table. All the data in the column will be lost.
  - Added the required column `json_data` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "tpg",
ADD COLUMN     "json_data" JSONB NOT NULL;
