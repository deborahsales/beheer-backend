import { ApiProperty } from '@nestjs/swagger';
import { PrioridadeDemanda, StatusDemanda } from 'generated/prisma';

export class DemandaEntity {
	@ApiProperty()
	id: string;

	@ApiProperty()
	titulo: string;

	@ApiProperty()
	descricao: string;

	@ApiProperty()
	prazo: Date;

	@ApiProperty()
	status: StatusDemanda;

	@ApiProperty()
	prioridade: PrioridadeDemanda;

	@ApiProperty()
	cronogramaId: string;

	@ApiProperty()
	gestorId: string;
}
