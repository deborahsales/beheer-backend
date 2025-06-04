-- DropForeignKey
ALTER TABLE "AjustePonto" DROP CONSTRAINT "AjustePonto_pontoId_fkey";

-- DropForeignKey
ALTER TABLE "AjustePonto" DROP CONSTRAINT "AjustePonto_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Assinatura" DROP CONSTRAINT "Assinatura_certificadoDigitalId_fkey";

-- DropForeignKey
ALTER TABLE "Assinatura" DROP CONSTRAINT "Assinatura_documento_id_fkey";

-- DropForeignKey
ALTER TABLE "Assinatura" DROP CONSTRAINT "Assinatura_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Atestado" DROP CONSTRAINT "Atestado_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Aviso" DROP CONSTRAINT "Aviso_gestorRhUsuarioId_fkey";

-- DropForeignKey
ALTER TABLE "AvisoUsuario" DROP CONSTRAINT "AvisoUsuario_avisoId_fkey";

-- DropForeignKey
ALTER TABLE "AvisoUsuario" DROP CONSTRAINT "AvisoUsuario_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Comentario" DROP CONSTRAINT "Comentario_demandaId_fkey";

-- DropForeignKey
ALTER TABLE "Comentario" DROP CONSTRAINT "Comentario_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Cronograma" DROP CONSTRAINT "Cronograma_gestorUsuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Demanda" DROP CONSTRAINT "Demanda_cronogramaId_fkey";

-- DropForeignKey
ALTER TABLE "Demanda" DROP CONSTRAINT "Demanda_gestorUsuarioId_fkey";

-- DropForeignKey
ALTER TABLE "DemandaGrupo" DROP CONSTRAINT "DemandaGrupo_demandaId_fkey";

-- DropForeignKey
ALTER TABLE "DemandaGrupo" DROP CONSTRAINT "DemandaGrupo_grupoId_fkey";

-- DropForeignKey
ALTER TABLE "DemandaUsuario" DROP CONSTRAINT "DemandaUsuario_demandaId_fkey";

-- DropForeignKey
ALTER TABLE "DemandaUsuario" DROP CONSTRAINT "DemandaUsuario_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Documento" DROP CONSTRAINT "Documento_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "GerenciamentoAjsutePonto" DROP CONSTRAINT "GerenciamentoAjsutePonto_ajustePontoId_fkey";

-- DropForeignKey
ALTER TABLE "GerenciamentoAjsutePonto" DROP CONSTRAINT "GerenciamentoAjsutePonto_rhUsuarioId_fkey";

-- DropForeignKey
ALTER TABLE "GrupoGestor" DROP CONSTRAINT "GrupoGestor_grupoId_fkey";

-- DropForeignKey
ALTER TABLE "GrupoGestor" DROP CONSTRAINT "GrupoGestor_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Localizacao" DROP CONSTRAINT "Localizacao_pontoId_fkey";

-- DropForeignKey
ALTER TABLE "Ponto" DROP CONSTRAINT "Ponto_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "PretacaoContas" DROP CONSTRAINT "PretacaoContas_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioGrupo" DROP CONSTRAINT "UsuarioGrupo_grupoId_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioGrupo" DROP CONSTRAINT "UsuarioGrupo_usuarioId_fkey";

-- AddForeignKey
ALTER TABLE "Demanda" ADD CONSTRAINT "Demanda_cronogramaId_fkey" FOREIGN KEY ("cronogramaId") REFERENCES "Cronograma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Demanda" ADD CONSTRAINT "Demanda_gestorUsuarioId_fkey" FOREIGN KEY ("gestorUsuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cronograma" ADD CONSTRAINT "Cronograma_gestorUsuarioId_fkey" FOREIGN KEY ("gestorUsuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aviso" ADD CONSTRAINT "Aviso_gestorRhUsuarioId_fkey" FOREIGN KEY ("gestorRhUsuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_demandaId_fkey" FOREIGN KEY ("demandaId") REFERENCES "Demanda"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Localizacao" ADD CONSTRAINT "Localizacao_pontoId_fkey" FOREIGN KEY ("pontoId") REFERENCES "Ponto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ponto" ADD CONSTRAINT "Ponto_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PretacaoContas" ADD CONSTRAINT "PretacaoContas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atestado" ADD CONSTRAINT "Atestado_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assinatura" ADD CONSTRAINT "Assinatura_certificadoDigitalId_fkey" FOREIGN KEY ("certificadoDigitalId") REFERENCES "CertificadoDigital"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assinatura" ADD CONSTRAINT "Assinatura_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assinatura" ADD CONSTRAINT "Assinatura_documento_id_fkey" FOREIGN KEY ("documento_id") REFERENCES "Documento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Documento" ADD CONSTRAINT "Documento_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AjustePonto" ADD CONSTRAINT "AjustePonto_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AjustePonto" ADD CONSTRAINT "AjustePonto_pontoId_fkey" FOREIGN KEY ("pontoId") REFERENCES "Ponto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GerenciamentoAjsutePonto" ADD CONSTRAINT "GerenciamentoAjsutePonto_ajustePontoId_fkey" FOREIGN KEY ("ajustePontoId") REFERENCES "AjustePonto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GerenciamentoAjsutePonto" ADD CONSTRAINT "GerenciamentoAjsutePonto_rhUsuarioId_fkey" FOREIGN KEY ("rhUsuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvisoUsuario" ADD CONSTRAINT "AvisoUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvisoUsuario" ADD CONSTRAINT "AvisoUsuario_avisoId_fkey" FOREIGN KEY ("avisoId") REFERENCES "Aviso"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioGrupo" ADD CONSTRAINT "UsuarioGrupo_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioGrupo" ADD CONSTRAINT "UsuarioGrupo_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GrupoGestor" ADD CONSTRAINT "GrupoGestor_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GrupoGestor" ADD CONSTRAINT "GrupoGestor_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DemandaGrupo" ADD CONSTRAINT "DemandaGrupo_demandaId_fkey" FOREIGN KEY ("demandaId") REFERENCES "Demanda"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DemandaGrupo" ADD CONSTRAINT "DemandaGrupo_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DemandaUsuario" ADD CONSTRAINT "DemandaUsuario_demandaId_fkey" FOREIGN KEY ("demandaId") REFERENCES "Demanda"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DemandaUsuario" ADD CONSTRAINT "DemandaUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
