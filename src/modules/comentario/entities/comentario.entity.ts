import { ApiProperty } from '@nestjs/swagger';

export class ComentarioEntity {
	@ApiProperty()
	id: string;

	@ApiProperty()
	conteudo: string;

	@ApiProperty()
	demandaId: string;

	@ApiProperty()
	usuarioId: string;

	@ApiProperty()
	dateTimestamp: string;

	@ApiProperty()
	dataAlteracao: string;
}
