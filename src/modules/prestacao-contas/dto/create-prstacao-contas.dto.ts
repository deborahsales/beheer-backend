import { ApiProperty } from '@nestjs/swagger';
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
	valor: number;

	@ApiProperty({ type: String, example: 'data:image/png;base64,iVBORw0' })
	@IsString()
	imagem: string;
}
