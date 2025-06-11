import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { DiaInteiro } from 'generated/prisma';

export class CreateAtestadoDto {
	@ApiProperty({ type: String, format: 'date-time' })
	@IsString()
	dataAtestado: Date;

	@ApiPropertyOptional({ type: String, format: 'date-time' })
	@IsString()
	horaInicio: Date;

	@ApiPropertyOptional({ type: String, format: 'date-time' })
	@IsString()
	horaTermino: Date;

	@IsEnum(DiaInteiro)
	@ApiProperty({
		enum: DiaInteiro,
		example: DiaInteiro.SIM,
	})
	diaInteiro: DiaInteiro;

	@ApiProperty({ type: String, example: 'data:image/png;base64,iVBORw0' })
	@IsString()
	imagem: string;
}
