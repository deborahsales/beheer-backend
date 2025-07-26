import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsLatitude, IsLongitude } from 'class-validator';

export class CreatePontoDto {
	@ApiProperty({ type: Number, example: -10.92259 })
	@IsLatitude()
	@Type(() => Number)
	latitude: number;

	@ApiProperty({ type: Number, example: -37.10378 })
	@IsLongitude()
	@Type(() => Number)
	longitude: number;
}
