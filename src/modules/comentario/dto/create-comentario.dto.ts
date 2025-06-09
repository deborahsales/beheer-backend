import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateComentarioDto {
	@ApiProperty({ type: String, example: 'Comentário' })
	@IsString()
	conteudo: string;

	@ApiProperty({ type: Number, example: 1 })
	@IsInt()
	demandaId: number;
}
