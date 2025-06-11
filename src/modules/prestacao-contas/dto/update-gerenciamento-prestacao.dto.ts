import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { StatusPrestacao } from 'generated/prisma';

export class UpdateGerenciamentoPrestacaoDto {
	@IsEnum(StatusPrestacao)
	@ApiProperty({
		enum: StatusPrestacao,
		example: StatusPrestacao.ACEITE,
	})
	status: StatusPrestacao;
}
