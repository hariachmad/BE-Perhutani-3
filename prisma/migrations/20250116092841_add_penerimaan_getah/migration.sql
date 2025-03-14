-- CreateTable
CREATE TABLE "penerimaan_getah" (
    "idPenerimaan" TEXT NOT NULL,
    "divisi" TEXT NOT NULL,
    "satuan" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "wilayah" TEXT NOT NULL,
    "petak" TEXT NOT NULL,
    "tpg" TEXT NOT NULL,
    "idk" TEXT NOT NULL,
    "penyadap" TEXT NOT NULL,
    "mutu" TEXT NOT NULL,
    "jumlah" TEXT NOT NULL,
    "harga_dasar" TEXT NOT NULL,
    "harga_tambahan" TEXT NOT NULL,
    "total" TEXT NOT NULL,
    "idtrans" TEXT NOT NULL,
    "uuid" TEXT NOT NULL,
    "imei" TEXT NOT NULL,

    CONSTRAINT "penerimaan_getah_pkey" PRIMARY KEY ("idPenerimaan")
);
