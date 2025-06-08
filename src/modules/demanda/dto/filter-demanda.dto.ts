import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { PrioridadeDemanda, StatusDemanda } from 'generated/prisma';

export class FilterDemandasDto {
	@IsOptional()
	@IsEnum(StatusDemanda)
	@ApiPropertyOptional({
		enum: StatusDemanda,
		example: StatusDemanda.CRIADA,
	})
	status: StatusDemanda;

	@IsOptional()
	@IsEnum(PrioridadeDemanda)
	@ApiPropertyOptional({
		enum: PrioridadeDemanda,
		example: PrioridadeDemanda.BAIXA,
	})
	prioridade: PrioridadeDemanda;
}
