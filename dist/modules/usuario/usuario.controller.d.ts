import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<{
        cpf: string;
        nome: string;
        email: string;
        telefone: string;
        dataNascimento: Date;
        dataAdmissao: Date;
        dataDesligamento: Date | null;
        cargo: string;
        funcao: import("generated/prisma").$Enums.FuncaoUsuario;
        id: number;
        dateTimestamp: Date;
    }>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        cpf: string;
        nome: string;
        email: string;
        telefone: string;
        dataNascimento: Date;
        dataAdmissao: Date;
        dataDesligamento: Date | null;
        cargo: string;
        funcao: import("generated/prisma").$Enums.FuncaoUsuario;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        cpf: string;
        nome: string;
        email: string;
        telefone: string;
        dataNascimento: Date;
        dataAdmissao: Date;
        dataDesligamento: Date | null;
        cargo: string;
        funcao: import("generated/prisma").$Enums.FuncaoUsuario;
        id: number;
        dateTimestamp: Date;
    }>;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<{
        cpf: string;
        nome: string;
        email: string;
        telefone: string;
        dataNascimento: Date;
        dataAdmissao: Date;
        dataDesligamento: Date | null;
        cargo: string;
        funcao: import("generated/prisma").$Enums.FuncaoUsuario;
        id: number;
        dateTimestamp: Date;
    }>;
    remove(id: number, req: RequestWithUser): Promise<void>;
}
