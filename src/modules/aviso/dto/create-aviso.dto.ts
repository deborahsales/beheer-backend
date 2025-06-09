import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateAvisoDto {
	@ApiProperty({ type: String, example: 'Aviso' })
	@IsString()
	assunto: string;

	@ApiProperty({ type: String, example: 'Conteudo do aviso' })
	@IsString()
	conteudo: string;

	@ApiPropertyOptional({ type: [Number], example: [2, 3] })
	@IsArray()
	@IsInt({ each: true })
	@IsOptional()
	avisoUsuario?: number[];
}
