import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class CreatePrestacaoContasDto {
	@ApiProperty({ type: String, example: 'Deslocamento X' })
	@IsString()
	descricao: string;

	@ApiProperty({ type: String, format: 'date-time' })
	@IsString()
	data: Date;

	@ApiProperty({ type: Number, example: 99.99 })
	@IsNumber()
	@Type(() => Number)
	valor: number;
}
