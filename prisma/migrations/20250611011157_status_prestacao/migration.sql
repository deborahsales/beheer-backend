-- CreateEnum
CREATE TYPE "StatusPrestacao" AS ENUM ('CADASTRADA', 'ACEITE', 'RECUSADA');

-- AlterTable
ALTER TABLE "PrestacaoContas" ADD COLUMN     "status" "StatusPrestacao" NOT NULL DEFAULT 'CADASTRADA';

-- CreateTable
CREATE TABLE "GerenciamentoPrestacao" (
    "dateTimestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "prestacaoId" INTEGER NOT NULL,
    "rhUsuarioId" INTEGER NOT NULL,

    CONSTRAINT "GerenciamentoPrestacao_pkey" PRIMARY KEY ("prestacaoId","rhUsuarioId")
);

-- AddForeignKey
ALTER TABLE "GerenciamentoPrestacao" ADD CONSTRAINT "GerenciamentoPrestacao_prestacaoId_fkey" FOREIGN KEY ("prestacaoId") REFERENCES "PrestacaoContas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GerenciamentoPrestacao" ADD CONSTRAINT "GerenciamentoPrestacao_rhUsuarioId_fkey" FOREIGN KEY ("rhUsuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
