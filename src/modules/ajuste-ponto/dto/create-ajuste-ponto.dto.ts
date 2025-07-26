import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { MotivoAjuste } from 'generated/prisma';

export class CreateAjustePontoDto {
	@ApiPropertyOptional({ type: String, format: 'date-time' })
	@IsOptional()
	dateTimestampAjustado: Date;

	@IsEnum(MotivoAjuste)
	@ApiProperty({
		enum: MotivoAjuste,
		example: MotivoAjuste.ERRO,
	})
	motivo: MotivoAjuste;
}
