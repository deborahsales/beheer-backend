import { ApiProperty } from '@nestjs/swagger';

export class ComentarioEntity {
	@ApiProperty()
	id: number;

	@ApiProperty()
	conteudo: string;

	@ApiProperty()
	demandaId: number;

	@ApiProperty()
	usuarioId: number;

	@ApiProperty()
	dateTimestamp: string;

	@ApiProperty()
	dataAlteracao: string;
}
