import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCronogramaDto {
	@ApiProperty({ type: String, example: 'Cronograma' })
	@IsString()
	titulo: string;

	@ApiPropertyOptional({ type: String, example: 'Descricao do cronograma' })
	@IsString()
	descricao: string;
}
