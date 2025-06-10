import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { StatusAjuste } from 'generated/prisma';
import { CreateAjustePontoDto } from './create-ajuste-ponto.dto';

export class UpdateAjustePontoDto extends PartialType(CreateAjustePontoDto) {
	@IsEnum(StatusAjuste)
	@ApiProperty({
		enum: StatusAjuste,
		example: StatusAjuste.AJUSTADO,
	})
	status: StatusAjuste;
}
