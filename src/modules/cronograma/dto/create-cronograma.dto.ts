import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateCronogramaDto {
	@ApiProperty({ type: String, example: 'Cronograma' })
	@IsString()
	titulo: string;

	@ApiPropertyOptional({ type: String, example: 'Descricao do cronograma' })
	@IsString()
	descricao: string;

	@ApiPropertyOptional({ type: [Number], example: [2, 3] })
	@IsArray()
	@IsInt({ each: true })
	@IsOptional()
	demandasCronograma?: number[];
}
