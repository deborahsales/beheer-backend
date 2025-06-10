import { ApiPropertyOptional } from '@nestjs/swagger';

export class AvisoEntity {
	id: number;

	assunto: string;

	conteudo: string;

	gestorRhUsuarioId: number;

	avisoUsuario?: number[];
}
