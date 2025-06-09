import { ApiProperty } from '@nestjs/swagger';

export class GrupoEntity {
	@ApiProperty()
	id: number;

	@ApiProperty()
	nome: string;

	@ApiProperty()
	descricao: string;
}
