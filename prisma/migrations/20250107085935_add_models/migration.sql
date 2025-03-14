-- CreateTable
CREATE TABLE "tarif_getah" (
    "MutuId" INTEGER NOT NULL,
    "MutuNama" TEXT NOT NULL,
    "TarifPungut" DECIMAL(65,30) NOT NULL,
    "TarifSarpra" TEXT NOT NULL,

    CONSTRAINT "tarif_getah_pkey" PRIMARY KEY ("MutuId")
);

-- CreateTable
CREATE TABLE "geo" (
    "id" SERIAL NOT NULL,
    "kodeDivisi" TEXT NOT NULL,
    "kodeSatuan" TEXT NOT NULL,
    "kodeArea" TEXT NOT NULL,
    "kodeWilayah" TEXT NOT NULL,
    "kodePetak" TEXT NOT NULL,
    "namaPetak" TEXT NOT NULL,
    "kodeTpg" TEXT NOT NULL,
    "jarak" TEXT NOT NULL,

    CONSTRAINT "geo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "penyadap" (
    "idPenyadap" TEXT NOT NULL,
    "namaPenyadap" TEXT NOT NULL,
    "kodePetak" TEXT NOT NULL,
    "kodeTpg" TEXT NOT NULL,

    CONSTRAINT "penyadap_pkey" PRIMARY KEY ("idPenyadap")
);

-- CreateTable
CREATE TABLE "tarif_pikul" (
    "id" SERIAL NOT NULL,
    "jarak" TEXT NOT NULL,
    "tarif" TEXT NOT NULL,

    CONSTRAINT "tarif_pikul_pkey" PRIMARY KEY ("id")
);
