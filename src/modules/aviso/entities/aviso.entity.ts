import { ApiProperty } from '@nestjs/swagger';

export class AvisoEntity {
	@ApiProperty()
	id: number;

	@ApiProperty()
	assunto: string;

	@ApiProperty()
	conteudo: string;

	@ApiProperty()
	gestorRhUsuarioId: number;

	@ApiProperty()
	avisoUsuario?: number[];
}
