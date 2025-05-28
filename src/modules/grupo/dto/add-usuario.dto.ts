import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class AddUsuarioDto {
	@ApiProperty({ type: Number, example: 5 })
	@IsInt()
	usuarioId: number;

	@ApiProperty({ type: Number, example: 5 })
	@IsInt()
	grupoId: number;
}
