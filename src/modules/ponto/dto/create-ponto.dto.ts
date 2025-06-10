import { ApiProperty } from '@nestjs/swagger';
import { IsLatitude, IsLongitude, IsString } from 'class-validator';

export class CreatePontoDto {
	@ApiProperty({ type: String, example: 'data:image/png;base64,iVBORw0' })
	@IsString()
	imagem: string;

	@ApiProperty({ type: Number, example: -10.123456 })
	@IsLatitude()
	latitude: number;

	@ApiProperty({ type: Number, example: -48.123456 })
	@IsLongitude()
	longitude: number;
}
