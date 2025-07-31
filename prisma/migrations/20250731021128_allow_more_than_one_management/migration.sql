/*
  Warnings:

  - The primary key for the `GerenciamentoAjustePonto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `GerenciamentoAtestado` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `GerenciamentoPrestacao` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "GerenciamentoAjustePonto" DROP CONSTRAINT "GerenciamentoAjustePonto_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "GerenciamentoAjustePonto_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "GerenciamentoAtestado" DROP CONSTRAINT "GerenciamentoAtestado_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "GerenciamentoAtestado_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "GerenciamentoPrestacao" DROP CONSTRAINT "GerenciamentoPrestacao_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "GerenciamentoPrestacao_pkey" PRIMARY KEY ("id");
