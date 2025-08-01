import { ApiProperty } from '@nestjs/swagger';
import { Demanda } from 'generated/prisma';

export class CronogramaEntity {
	@ApiProperty()
	id: number;

	@ApiProperty()
	titulo: string;

	@ApiProperty()
	descricao: string;

	@ApiProperty()
	dataInicio: string;

	@ApiProperty()
	dataTermino: string;

	@ApiProperty()
	gestorUsuarioId: number;

	@ApiProperty()
	demandasCronograma: Demanda[];
}
