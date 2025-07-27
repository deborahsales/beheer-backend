import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
import { FuncaoUsuario } from 'generated/prisma';

export class CreateUsuarioDto {
	@ApiProperty({ type: String, example: '12345678900' })
	@IsString()
	cpf: string;

	@ApiProperty({ type: String, example: 'Jane Doe' })
	@IsString()
	nome: string;

	@ApiProperty({ type: String, example: 'janedoe@email.com' })
	@IsEmail()
	email: string;

	@ApiProperty({ type: String, example: '123456' })
	@IsString()
	senha: string;

	@ApiProperty({ type: String, example: '79999654387' })
	@IsString()
	telefone: string;

	@ApiProperty({ type: String, format: 'date-time' })
	@IsString()
	dataNascimento: Date;

	@ApiProperty({ type: String, format: 'date-time' })
	@IsString()
	dataAdmissao: Date;

	@IsOptional()
	@ApiPropertyOptional({ type: String, format: 'date-time' })
	@IsOptional()
	@IsString()
	dataDesligamento?: Date;

	@ApiProperty({ type: String, example: 'Analista' })
	@IsString()
	cargo: string;

	@IsEnum(FuncaoUsuario)
	@ApiProperty({
		enum: FuncaoUsuario,
		example: FuncaoUsuario.COLABORADOR,
	})
	funcao: FuncaoUsuario;
}
