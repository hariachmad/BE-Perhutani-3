-- CreateTable
CREATE TABLE "Price" (
    "no" SERIAL NOT NULL,
    "mutu" INTEGER NOT NULL,
    "harga" DOUBLE PRECISION NOT NULL,
    "datetime" TEXT NOT NULL,

    CONSTRAINT "Price_pkey" PRIMARY KEY ("no")
);
