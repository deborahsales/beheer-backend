import { ApiProperty } from '@nestjs/swagger';

export class PontoEntity {
	@ApiProperty()
	id: number;

	@ApiProperty()
	dateTimestamp: Date;

	@ApiProperty()
	ip: string;

	@ApiProperty()
	imagem: string;

	@ApiProperty()
	latitude: number;

	@ApiProperty()
	longitude: number;

	@ApiProperty()
	usuarioId: number;

	@ApiProperty()
	ativo: boolean;
}
