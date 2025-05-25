import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
	@IsEmail()
	@ApiProperty({ type: String, example: 'janedoe@email.com' })
	email: string;

	@IsString()
	@ApiProperty({ type: String, example: '123456' })
	senha: string;
}
