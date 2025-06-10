import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { FuncaoUsuario } from 'generated/prisma';

export class UsuarioEntity {
	id: number;

	cpf: string;

	nome: string;

	email: string;

	telefone: string;

	dataNascimento: Date;

	dataAdmissao: Date;

	dataDesligamento?: Date;

	cargo: string;

	funcao: FuncaoUsuario;
}
