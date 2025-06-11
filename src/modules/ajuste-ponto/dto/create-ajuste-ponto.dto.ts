import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsString } from 'class-validator';
import { MotivoAjuste, StatusAjuste } from 'generated/prisma';

export class CreateAjustePontoDto {
	@ApiProperty({ type: String, format: 'date-time' })
	@IsString()
	dateTimestampAjustado: Date;

	@IsEnum(MotivoAjuste)
	@ApiProperty({
		enum: MotivoAjuste,
		example: MotivoAjuste.ERRO,
	})
	motivo: MotivoAjuste;
}
