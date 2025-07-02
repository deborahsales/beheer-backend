import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
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

	@ApiPropertyOptional({ type: Number, example: 1 })
	@IsString()
	cronogramaId: number;

	@ApiPropertyOptional({ type: [Number], example: [2, 3] })
	@IsArray()
	@IsInt({ each: true })
	@IsOptional()
	usuariosDemanda?: number[];

	@ApiPropertyOptional({ type: [Number], example: [2, 3] })
	@IsArray()
	@IsInt({ each: true })
	@IsOptional()
	gruposDemanda?: number[];
}
