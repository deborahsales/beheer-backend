import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreatePontoDto } from './create-ponto.dto';

export class UpdatePontoDto extends PartialType(
	OmitType(CreatePontoDto, ['imagem', 'latitude', 'longitude'] as const),
) {
	@ApiProperty({ type: String, format: 'date-time' })
	@IsString()
	dateTimestamp: Date;
}
