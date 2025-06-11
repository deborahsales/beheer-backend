/*
  Warnings:

  - The values [DUPLICAÇÃO] on the enum `MotivoAjuste` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "MotivoAjuste_new" AS ENUM ('ERRO', 'DUPLICADO');
ALTER TABLE "AjustePonto" ALTER COLUMN "motivo" TYPE "MotivoAjuste_new" USING ("motivo"::text::"MotivoAjuste_new");
ALTER TYPE "MotivoAjuste" RENAME TO "MotivoAjuste_old";
ALTER TYPE "MotivoAjuste_new" RENAME TO "MotivoAjuste";
DROP TYPE "MotivoAjuste_old";
COMMIT;
