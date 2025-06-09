import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateGrupoDto {
	@ApiProperty({ type: String, example: 'Grupo' })
	@IsString()
	@IsNotEmpty()
	nome: string;

	@ApiProperty({ type: String, example: 'Descrição' })
	@IsString()
	@IsNotEmpty()
	descricao: string;

	@ApiProperty({ type: [Number], example: [2, 3] })
	@IsArray()
	@IsInt({ each: true })
	@IsOptional()
	usuarios?: number[];

	@ApiProperty({ type: [Number], example: [2, 3] })
	@IsArray()
	@IsInt({ each: true })
	@IsOptional()
	gestores?: number[];
}
