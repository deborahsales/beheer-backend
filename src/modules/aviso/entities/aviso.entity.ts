import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class AvisoEntity {
	@ApiProperty()
	id: number;

	@ApiProperty()
	assunto: string;

	@ApiProperty()
	conteudo: string;

	@ApiProperty()
	gestorRhUsuarioId: number;

	@ApiPropertyOptional()
	avisoUsuario?: number[];
}
