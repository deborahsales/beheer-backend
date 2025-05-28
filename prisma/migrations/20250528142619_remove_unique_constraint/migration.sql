-- DropIndex
DROP INDEX "AvisoUsuario_avisoId_key";

-- DropIndex
DROP INDEX "AvisoUsuario_usuarioId_key";

-- DropIndex
DROP INDEX "DemandaGrupo_demandaId_key";

-- DropIndex
DROP INDEX "DemandaGrupo_grupoId_key";

-- DropIndex
DROP INDEX "DemandaUsuario_demandaId_key";

-- DropIndex
DROP INDEX "DemandaUsuario_usuarioId_key";

-- DropIndex
DROP INDEX "GerenciamentoAjsutePonto_ajustePontoId_key";

-- DropIndex
DROP INDEX "GerenciamentoAjsutePonto_rhUsuarioId_key";

-- DropIndex
DROP INDEX "GrupoGestor_grupoId_key";

-- DropIndex
DROP INDEX "GrupoGestor_usuarioId_key";

-- DropIndex
DROP INDEX "UsuarioGrupo_grupoId_key";

-- DropIndex
DROP INDEX "UsuarioGrupo_usuarioId_key";

-- AlterTable
ALTER TABLE "AvisoUsuario" ADD CONSTRAINT "AvisoUsuario_pkey" PRIMARY KEY ("usuarioId", "avisoId");

-- AlterTable
ALTER TABLE "DemandaGrupo" ADD CONSTRAINT "DemandaGrupo_pkey" PRIMARY KEY ("demandaId", "grupoId");

-- AlterTable
ALTER TABLE "DemandaUsuario" ADD CONSTRAINT "DemandaUsuario_pkey" PRIMARY KEY ("demandaId", "usuarioId");

-- AlterTable
ALTER TABLE "GerenciamentoAjsutePonto" ADD CONSTRAINT "GerenciamentoAjsutePonto_pkey" PRIMARY KEY ("ajustePontoId", "rhUsuarioId");

-- AlterTable
ALTER TABLE "GrupoGestor" ADD CONSTRAINT "GrupoGestor_pkey" PRIMARY KEY ("usuarioId", "grupoId");

-- AlterTable
ALTER TABLE "UsuarioGrupo" ADD CONSTRAINT "UsuarioGrupo_pkey" PRIMARY KEY ("usuarioId", "grupoId");
