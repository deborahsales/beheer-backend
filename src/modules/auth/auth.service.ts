import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
	constructor(
		private usuarioService: UsuarioService,
		private jwtService: JwtService,
	) {}

	async validateUser(email: string, senha: string) {
		const usuario = await this.usuarioService.findByEmail(email);

		if (!usuario) {
			throw new UnauthorizedException('Usuário não encontrado');
		}

		const passwordValid = await bcrypt.compare(senha, usuario.senha);

		if (!passwordValid) {
			throw new UnauthorizedException('Senha inválida');
		}

		const { senha: _, ...result } = usuario;
		return result;
	}

	async login(usuario: any) {
		const payload = { sub: usuario.id, email: usuario.email, funcao: usuario.funcao };
		return {
			access_token: this.jwtService.sign(payload),
		};
	}
}
