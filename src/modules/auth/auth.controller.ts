import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@ApiTags('login')
@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post()
	@ApiResponse({ status: 201, description: 'Login successful' })
	@ApiResponse({ status: 401, description: 'Invalid credentials' })
	async login(@Body() loginDto: LoginDto) {
		const usuario = await this.authService.validateUser(loginDto.email, loginDto.senha);
		return this.authService.login(usuario);
	}
}
