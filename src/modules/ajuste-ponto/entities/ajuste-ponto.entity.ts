import { ApiProperty } from '@nestjs/swagger';
import { MotivoAjuste, StatusAjuste } from 'generated/prisma';

export class AjustePontoEntity {
	@ApiProperty()
	id: number;

	@ApiProperty()
	dateTimestampAjustado: Date;

	@ApiProperty()
	motivo: MotivoAjuste;

	@ApiProperty()
	status: StatusAjuste;

	@ApiProperty()
	usuarioId: number;

	@ApiProperty()
	pontoId: number;
}
