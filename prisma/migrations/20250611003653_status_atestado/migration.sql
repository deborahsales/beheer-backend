-- CreateEnum
CREATE TYPE "StatusAtestado" AS ENUM ('CADASTRADO', 'ACEITE', 'RECUSADO');

-- AlterTable
ALTER TABLE "Atestado" ADD COLUMN     "status" "StatusAtestado" NOT NULL DEFAULT 'CADASTRADO';
