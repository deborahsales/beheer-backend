import { ApiProperty } from '@nestjs/swagger';
import { DiaInteiro, StatusAtestado } from 'generated/prisma';

export class AtestadoEntity {
	@ApiProperty()
	id: number;

	@ApiProperty()
	dateTimestamp: Date;

	@ApiProperty()
	dataAtestado: Date;

	@ApiProperty()
	horaInicio: Date;

	@ApiProperty()
	horaTermino: Date;

	@ApiProperty()
	diaInteiro: DiaInteiro;

	@ApiProperty()
	imagem: string;

	@ApiProperty()
	status: StatusAtestado;

	@ApiProperty()
	usuarioId: number;
}
