import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { MotivoAjuste } from 'generated/prisma';

export class CreateAjustePontoDto {
	@ApiPropertyOptional({ type: String, format: 'date-time' })
	@IsString()
	dateTimestampAjustado: Date;

	@IsEnum(MotivoAjuste)
	@ApiProperty({
		enum: MotivoAjuste,
		example: MotivoAjuste.ERRO,
	})
	motivo: MotivoAjuste;
}
