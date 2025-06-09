import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { FuncaoUsuario } from 'generated/prisma';

export class UsuarioEntity {
	@ApiProperty()
	id: number;

	@ApiProperty()
	cpf: string;

	@ApiProperty()
	nome: string;

	@ApiProperty()
	email: string;

	@ApiProperty()
	telefone: string;

	@ApiProperty()
	dataNascimento: Date;

	@ApiProperty()
	dataAdmissao: Date;

	@ApiPropertyOptional()
	dataDesligamento?: Date;

	@ApiProperty()
	cargo: string;

	@ApiProperty({ enum: FuncaoUsuario })
	funcao: FuncaoUsuario;
}
