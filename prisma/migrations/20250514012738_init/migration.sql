-- CreateEnum
CREATE TYPE "FuncaoUsuario" AS ENUM ('GESTOR', 'RH', 'COLABORADOR');

-- CreateEnum
CREATE TYPE "PrioridadeDemanda" AS ENUM ('BAIXA', 'MEDIA', 'ALTA');

-- CreateEnum
CREATE TYPE "StatusDemanda" AS ENUM ('CRIADA', 'INICIADA', 'ATRASADA', 'FINALIZADA');

-- CreateEnum
CREATE TYPE "DiaInteiro" AS ENUM ('SIM', 'NAO');

-- CreateEnum
CREATE TYPE "StatusAssinatura" AS ENUM ('ATIVA', 'INATIVA', 'CANCELADA');

-- CreateEnum
CREATE TYPE "StatusCertificado" AS ENUM ('VALIDO', 'EXPIRADO', 'REVOGADO', 'SUSPENSO', 'CANCELADO');

-- CreateEnum
CREATE TYPE "StatusDocumento" AS ENUM ('ASSINADO', 'PENDENTE');

-- CreateEnum
CREATE TYPE "MotivoAjuste" AS ENUM ('ERRO', 'DUPLICAÇÃO');

-- CreateEnum
CREATE TYPE "StatusAjuste" AS ENUM ('AJUSTADO', 'PENDENTE');

-- CreateEnum
CREATE TYPE "StatusAviso" AS ENUM ('LIDO', 'PENDENTE');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "cpf" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "dataAdmissao" TIMESTAMP(3) NOT NULL,
    "dataDesligamento" TIMESTAMP(3),
    "cargo" TEXT NOT NULL,
    "funcao" "FuncaoUsuario"[] DEFAULT ARRAY[]::"FuncaoUsuario"[],

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Demanda" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "prazo" TIMESTAMP(3),
    "status" "StatusDemanda" NOT NULL,
    "dateTimestamp" TIMESTAMP(3) NOT NULL,
    "prioridade" "PrioridadeDemanda" NOT NULL,
    "cronogramaId" INTEGER NOT NULL,
    "gestorUsuarioId" INTEGER NOT NULL,

    CONSTRAINT "Demanda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cronograma" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "dateTimestamp" TIMESTAMP(3) NOT NULL,
    "gestorUsuarioId" INTEGER NOT NULL,

    CONSTRAINT "Cronograma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aviso" (
    "id" SERIAL NOT NULL,
    "assunto" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "dateTimestamp" TIMESTAMP(3) NOT NULL,
    "gestorRhUsuarioId" INTEGER NOT NULL,

    CONSTRAINT "Aviso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Grupo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Grupo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comentario" (
    "id" SERIAL NOT NULL,
    "conteudo" TEXT NOT NULL,
    "dateTtimestamp" TIMESTAMP(3) NOT NULL,
    "dataAlteracao" TIMESTAMP(3),
    "demandaId" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "Comentario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Localizacao" (
    "id" SERIAL NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "pontoId" INTEGER NOT NULL,

    CONSTRAINT "Localizacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ponto" (
    "id" SERIAL NOT NULL,
    "dateTimestamp" TIMESTAMP(3) NOT NULL,
    "ip" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "Ponto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PretacaoContas" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "imagem" TEXT NOT NULL,
    "dateTimestamp" TIMESTAMP(3) NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "PretacaoContas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Atestado" (
    "id" SERIAL NOT NULL,
    "dateTimestamp" TIMESTAMP(3) NOT NULL,
    "dataAtestado" TIMESTAMP(3) NOT NULL,
    "horaInicio" TIMESTAMP(3),
    "horaTermino" TIMESTAMP(3),
    "diaInteiro" "DiaInteiro" NOT NULL,
    "imagem" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "Atestado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Assinatura" (
    "id" SERIAL NOT NULL,
    "assinatura" TEXT NOT NULL,
    "dateTimestamp" TIMESTAMP(3) NOT NULL,
    "status" "StatusAssinatura" NOT NULL,
    "ip" TEXT NOT NULL,
    "certificadoDigitalId" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "documento_id" INTEGER NOT NULL,

    CONSTRAINT "Assinatura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CertificadoDigital" (
    "id" SERIAL NOT NULL,
    "certificado" TEXT NOT NULL,
    "dataEmissao" TIMESTAMP(3) NOT NULL,
    "dataValidade" TIMESTAMP(3) NOT NULL,
    "status" "StatusCertificado" NOT NULL,

    CONSTRAINT "CertificadoDigital_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Documento" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "dateTimestamp" TIMESTAMP(3) NOT NULL,
    "status" "StatusDocumento" NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "Documento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AjustePonto" (
    "id" SERIAL NOT NULL,
    "horario" TIMESTAMP(3) NOT NULL,
    "motivo" "MotivoAjuste" NOT NULL,
    "status" "StatusAjuste" NOT NULL,
    "dateTimestamp" TIMESTAMP(3) NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "pontoId" INTEGER NOT NULL,

    CONSTRAINT "AjustePonto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GerenciamentoAjsutePonto" (
    "status" "StatusAjuste" NOT NULL,
    "dateTimestamp" TIMESTAMP(3) NOT NULL,
    "ajustePontoId" INTEGER NOT NULL,
    "rhUsuarioId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "AvisoUsuario" (
    "status" "StatusAviso" NOT NULL,
    "dateTimestamp" TIMESTAMP(3) NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "avisoId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "UsuarioGrupo" (
    "usuarioId" INTEGER NOT NULL,
    "grupoId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "GrupoGestor" (
    "usuarioId" INTEGER NOT NULL,
    "grupoId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "DemandaGrupo" (
    "demandaId" INTEGER NOT NULL,
    "grupoId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "DemandaUsuario" (
    "demandaId" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "Usuario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Localizacao_pontoId_key" ON "Localizacao"("pontoId");

-- CreateIndex
CREATE UNIQUE INDEX "Assinatura_documento_id_key" ON "Assinatura"("documento_id");

-- CreateIndex
CREATE UNIQUE INDEX "GerenciamentoAjsutePonto_ajustePontoId_key" ON "GerenciamentoAjsutePonto"("ajustePontoId");

-- CreateIndex
CREATE UNIQUE INDEX "GerenciamentoAjsutePonto_rhUsuarioId_key" ON "GerenciamentoAjsutePonto"("rhUsuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "AvisoUsuario_usuarioId_key" ON "AvisoUsuario"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "AvisoUsuario_avisoId_key" ON "AvisoUsuario"("avisoId");

-- CreateIndex
CREATE UNIQUE INDEX "UsuarioGrupo_usuarioId_key" ON "UsuarioGrupo"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "UsuarioGrupo_grupoId_key" ON "UsuarioGrupo"("grupoId");

-- CreateIndex
CREATE UNIQUE INDEX "GrupoGestor_usuarioId_key" ON "GrupoGestor"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "GrupoGestor_grupoId_key" ON "GrupoGestor"("grupoId");

-- CreateIndex
CREATE UNIQUE INDEX "DemandaGrupo_demandaId_key" ON "DemandaGrupo"("demandaId");

-- CreateIndex
CREATE UNIQUE INDEX "DemandaGrupo_grupoId_key" ON "DemandaGrupo"("grupoId");

-- CreateIndex
CREATE UNIQUE INDEX "DemandaUsuario_demandaId_key" ON "DemandaUsuario"("demandaId");

-- CreateIndex
CREATE UNIQUE INDEX "DemandaUsuario_usuarioId_key" ON "DemandaUsuario"("usuarioId");

-- AddForeignKey
ALTER TABLE "Demanda" ADD CONSTRAINT "Demanda_cronogramaId_fkey" FOREIGN KEY ("cronogramaId") REFERENCES "Cronograma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Demanda" ADD CONSTRAINT "Demanda_gestorUsuarioId_fkey" FOREIGN KEY ("gestorUsuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cronograma" ADD CONSTRAINT "Cronograma_gestorUsuarioId_fkey" FOREIGN KEY ("gestorUsuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aviso" ADD CONSTRAINT "Aviso_gestorRhUsuarioId_fkey" FOREIGN KEY ("gestorRhUsuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_demandaId_fkey" FOREIGN KEY ("demandaId") REFERENCES "Demanda"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Localizacao" ADD CONSTRAINT "Localizacao_pontoId_fkey" FOREIGN KEY ("pontoId") REFERENCES "Ponto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ponto" ADD CONSTRAINT "Ponto_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PretacaoContas" ADD CONSTRAINT "PretacaoContas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atestado" ADD CONSTRAINT "Atestado_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assinatura" ADD CONSTRAINT "Assinatura_certificadoDigitalId_fkey" FOREIGN KEY ("certificadoDigitalId") REFERENCES "CertificadoDigital"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assinatura" ADD CONSTRAINT "Assinatura_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assinatura" ADD CONSTRAINT "Assinatura_documento_id_fkey" FOREIGN KEY ("documento_id") REFERENCES "Documento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Documento" ADD CONSTRAINT "Documento_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AjustePonto" ADD CONSTRAINT "AjustePonto_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AjustePonto" ADD CONSTRAINT "AjustePonto_pontoId_fkey" FOREIGN KEY ("pontoId") REFERENCES "Ponto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GerenciamentoAjsutePonto" ADD CONSTRAINT "GerenciamentoAjsutePonto_ajustePontoId_fkey" FOREIGN KEY ("ajustePontoId") REFERENCES "AjustePonto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GerenciamentoAjsutePonto" ADD CONSTRAINT "GerenciamentoAjsutePonto_rhUsuarioId_fkey" FOREIGN KEY ("rhUsuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvisoUsuario" ADD CONSTRAINT "AvisoUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvisoUsuario" ADD CONSTRAINT "AvisoUsuario_avisoId_fkey" FOREIGN KEY ("avisoId") REFERENCES "Aviso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioGrupo" ADD CONSTRAINT "UsuarioGrupo_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioGrupo" ADD CONSTRAINT "UsuarioGrupo_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GrupoGestor" ADD CONSTRAINT "GrupoGestor_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GrupoGestor" ADD CONSTRAINT "GrupoGestor_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DemandaGrupo" ADD CONSTRAINT "DemandaGrupo_demandaId_fkey" FOREIGN KEY ("demandaId") REFERENCES "Demanda"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DemandaGrupo" ADD CONSTRAINT "DemandaGrupo_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DemandaUsuario" ADD CONSTRAINT "DemandaUsuario_demandaId_fkey" FOREIGN KEY ("demandaId") REFERENCES "Demanda"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DemandaUsuario" ADD CONSTRAINT "DemandaUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
