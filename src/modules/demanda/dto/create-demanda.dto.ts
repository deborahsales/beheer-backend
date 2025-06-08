import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsString } from 'class-validator';
import { PrioridadeDemanda, StatusDemanda } from 'generated/prisma';

export class CreateDemandaDto {
	@ApiProperty({ type: String, example: 'Demanda 1' })
	@IsString()
	titulo: string;

	@ApiProperty({ type: String, example: 'Descricao da demanda 1' })
	@IsString()
	descricao: string;

	@ApiProperty({ type: String, format: 'date-time' })
	@IsString()
	prazo?: Date;

	@IsEnum(StatusDemanda)
	@ApiProperty({
		enum: StatusDemanda,
		example: StatusDemanda.CRIADA,
	})
	status: StatusDemanda;

	@IsEnum(PrioridadeDemanda)
	@ApiProperty({
		enum: PrioridadeDemanda,
		example: PrioridadeDemanda.BAIXA,
	})
	prioridade: PrioridadeDemanda;
}
