/*
  Warnings:

  - You are about to drop the `GerenciamentoAjsutePonto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GerenciamentoAjsutePonto" DROP CONSTRAINT "GerenciamentoAjsutePonto_ajustePontoId_fkey";

-- DropForeignKey
ALTER TABLE "GerenciamentoAjsutePonto" DROP CONSTRAINT "GerenciamentoAjsutePonto_rhUsuarioId_fkey";

-- DropTable
DROP TABLE "GerenciamentoAjsutePonto";

-- CreateTable
CREATE TABLE "GerenciamentoAjustePonto" (
    "status" "StatusAjuste" NOT NULL,
    "dateTimestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ajustePontoId" INTEGER NOT NULL,
    "rhUsuarioId" INTEGER NOT NULL,

    CONSTRAINT "GerenciamentoAjustePonto_pkey" PRIMARY KEY ("ajustePontoId","rhUsuarioId")
);

-- AddForeignKey
ALTER TABLE "GerenciamentoAjustePonto" ADD CONSTRAINT "GerenciamentoAjustePonto_ajustePontoId_fkey" FOREIGN KEY ("ajustePontoId") REFERENCES "AjustePonto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GerenciamentoAjustePonto" ADD CONSTRAINT "GerenciamentoAjustePonto_rhUsuarioId_fkey" FOREIGN KEY ("rhUsuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
