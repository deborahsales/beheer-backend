import { ApiProperty } from '@nestjs/swagger';

export class GrupoEntity {
	@ApiProperty()
	nome: string;

	@ApiProperty()
	descricao: string;
}
