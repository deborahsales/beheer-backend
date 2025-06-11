import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { StatusAjuste } from 'generated/prisma';

export class UpdateGerenciamentoPontoDto {
	@IsEnum(StatusAjuste)
	@ApiProperty({
		enum: StatusAjuste,
		example: StatusAjuste.AJUSTADO,
	})
	status: StatusAjuste;
}
