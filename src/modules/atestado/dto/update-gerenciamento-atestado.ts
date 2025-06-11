import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { StatusAtestado } from 'generated/prisma';

export class UpdateGerenciamentoAtestadoDto {
	@IsEnum(StatusAtestado)
	@ApiProperty({
		enum: StatusAtestado,
		example: StatusAtestado.ACEITE,
	})
	status: StatusAtestado;
}
