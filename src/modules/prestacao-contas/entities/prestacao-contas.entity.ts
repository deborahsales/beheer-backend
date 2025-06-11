import { ApiProperty } from '@nestjs/swagger';
import { GerenciamentoPrestacao, StatusPrestacao } from 'generated/prisma';

export class PrestacaoContasEntity {
	@ApiProperty()
	id: number;

	@ApiProperty()
	descricao: string;

	@ApiProperty()
	data: Date;

	@ApiProperty()
	dateTimestamp: Date;

	@ApiProperty()
	valor: number;

	@ApiProperty()
	imagem: string;

	@ApiProperty()
	status: StatusPrestacao;

	@ApiProperty()
	usuarioId: number;

	@ApiProperty()
	gerenciamentoPrestacao: GerenciamentoPrestacao[];
}
