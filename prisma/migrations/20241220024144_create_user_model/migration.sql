-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "level" TEXT NOT NULL,
    "uid" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
