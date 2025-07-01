import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsuarioService } from '../usuario/usuario.service';

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

		if (usuario.dataDesligamento) {
			throw new UnauthorizedException('Usuário inativo');
		}

		const passwordValid = await bcrypt.compare(senha, usuario.senha);

		if (!passwordValid) {
			throw new UnauthorizedException('Senha inválida');
		}

		const { senha: _, ...result } = usuario;
		return result;
	}

	async login(usuario: any) {
		const payload = {
			sub: usuario.id,
			email: usuario.email,
			funcao: usuario.funcao,
			nome: usuario.nome,
		};
		return {
			access_token: this.jwtService.sign(payload),
		};
	}
}
