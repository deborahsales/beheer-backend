-- AlterEnum
ALTER TYPE "StatusAjuste" ADD VALUE 'RECUSADO';

-- AlterTable
ALTER TABLE "Ponto" ADD COLUMN     "ativo" BOOLEAN NOT NULL DEFAULT true;
