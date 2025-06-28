import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usuarioService;
    private jwtService;
    constructor(usuarioService: UsuarioService, jwtService: JwtService);
    validateUser(email: string, senha: string): Promise<{
        id: number;
        cpf: string;
        nome: string;
        email: string;
        telefone: string;
        dataNascimento: Date;
        dataAdmissao: Date;
        dataDesligamento: Date | null;
        cargo: string;
        funcao: import("generated/prisma").$Enums.FuncaoUsuario;
        dateTimestamp: Date;
    }>;
    login(usuario: any): Promise<{
        access_token: string;
    }>;
}
