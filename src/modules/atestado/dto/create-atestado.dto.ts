import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { DiaInteiro } from 'generated/prisma';

export class CreateAtestadoDto {
	@ApiProperty({ type: String, format: 'date-time' })
	@IsString()
	dataAtestado: Date;

	@ApiPropertyOptional({ type: String, format: 'date-time' })
	@IsOptional()
	horaInicio?: string;

	@ApiPropertyOptional({ type: String, format: 'date-time' })
	@IsOptional()
	horaTermino?: string;

	@IsEnum(DiaInteiro)
	@ApiProperty({
		enum: DiaInteiro,
		example: DiaInteiro.SIM,
	})
	diaInteiro: DiaInteiro;
}
