/*
  Warnings:

  - You are about to drop the `Localizacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PretacaoContas` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `latitude` to the `Ponto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Ponto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Localizacao" DROP CONSTRAINT "Localizacao_pontoId_fkey";

-- DropForeignKey
ALTER TABLE "PretacaoContas" DROP CONSTRAINT "PretacaoContas_usuarioId_fkey";

-- AlterTable
ALTER TABLE "Ponto" ADD COLUMN     "latitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "longitude" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "Localizacao";

-- DropTable
DROP TABLE "PretacaoContas";

-- CreateTable
CREATE TABLE "PrestacaoContas" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "imagem" TEXT NOT NULL,
    "dateTimestamp" TIMESTAMP(3) NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "PrestacaoContas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PrestacaoContas" ADD CONSTRAINT "PrestacaoContas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
