/*
  Warnings:

  - You are about to drop the column `level` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `uid` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `user` on the `user` table. All the data in the column will be lost.
  - Added the required column `fullname` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idk` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `satuan` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "level",
DROP COLUMN "uid",
DROP COLUMN "user",
ADD COLUMN     "fullname" TEXT NOT NULL,
ADD COLUMN     "idk" INTEGER NOT NULL,
ADD COLUMN     "satuan" INTEGER NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;
