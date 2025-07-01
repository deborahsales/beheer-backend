import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/usuario.service';
export declare class AuthService {
    private usuarioService;
    private jwtService;
    constructor(usuarioService: UsuarioService, jwtService: JwtService);
    validateUser(email: string, senha: string): Promise<{
        id: number;
        dateTimestamp: Date;
        funcao: import("generated/prisma").$Enums.FuncaoUsuario;
        cpf: string;
        nome: string;
        email: string;
        telefone: string;
        dataNascimento: Date;
        dataAdmissao: Date;
        dataDesligamento: Date | null;
        cargo: string;
    }>;
    login(usuario: any): Promise<{
        access_token: string;
    }>;
}
