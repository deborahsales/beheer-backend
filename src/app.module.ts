import { Module } from '@nestjs/common';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { DemandaModule } from './modules/demanda/demanda.module';
import { CronogramaModule } from './modules/cronograma/cronograma.module';
import { AvisoModule } from './modules/aviso/aviso.module';
import { GrupoModule } from './modules/grupo/grupo.module';
import { ComentarioModule } from './modules/comentario/comentario.module';
import { LocalizacaoModule } from './modules/localizacao/localizacao.module';
import { PontoModule } from './modules/ponto/ponto.module';
import { PrestacaoContasModule } from './modules/prestacao-contas/prestacao-contas.module';
import { AtestadoModule } from './modules/atestado/atestado.module';
import { AssinaturaModule } from './modules/assinatura/assinatura.module';
import { CertificadoDigitalModule } from './modules/certificado-digital/certificado-digital.module';
import { DocumentoModule } from './modules/documento/documento.module';
import { AjustePontoModule } from './modules/ajuste-ponto/ajuste-ponto.module';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
	imports: [
		UsuarioModule,
		DemandaModule,
		CronogramaModule,
		AvisoModule,
		GrupoModule,
		ComentarioModule,
		LocalizacaoModule,
		PontoModule,
		PrestacaoContasModule,
		AtestadoModule,
		AssinaturaModule,
		CertificadoDigitalModule,
		DocumentoModule,
		AjustePontoModule,
		AuthModule,
		PrismaModule,
	],
})
export class AppModule {}
