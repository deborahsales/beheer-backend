import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsArray, IsInt, IsOptional } from 'class-validator';
import { CreateDemandaDto } from './create-demanda.dto';

export class UpdateDemandaDto extends PartialType(CreateDemandaDto) {
	@ApiProperty({ type: [Number], example: [1, 2] })
	@IsArray()
	@IsInt({ each: true })
	@IsOptional()
	usuariosDemanda?: number[];

	@ApiProperty({ type: [Number], example: [1, 2] })
	@IsArray()
	@IsInt({ each: true })
	@IsOptional()
	gruposDemanda?: number[];
}
