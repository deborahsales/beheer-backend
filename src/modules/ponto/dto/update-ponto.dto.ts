import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdatePontoDto {
	@ApiProperty({ type: String, format: 'date-time' })
	@IsString()
	dateTimestamp: Date;
}
