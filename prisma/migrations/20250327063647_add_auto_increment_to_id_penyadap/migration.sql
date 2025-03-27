-- AlterTable
CREATE SEQUENCE penyadap_id_seq;
ALTER TABLE "penyadap" ALTER COLUMN "id" SET DEFAULT nextval('penyadap_id_seq');
ALTER SEQUENCE penyadap_id_seq OWNED BY "penyadap"."id";
