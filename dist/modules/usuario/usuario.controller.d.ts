import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<{
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
    findAllAdmin(req: RequestWithUser): import("generated/prisma").Prisma.PrismaPromise<{
        id: number;
        funcao: import("generated/prisma").$Enums.FuncaoUsuario;
        cpf: string;
        nome: string;
        email: string;
        telefone: string;
        dataNascimento: Date;
        dataAdmissao: Date;
        dataDesligamento: Date | null;
        cargo: string;
    }[]>;
    findAll(req: RequestWithUser): import("generated/prisma").Prisma.PrismaPromise<{
        id: number;
        funcao: import("generated/prisma").$Enums.FuncaoUsuario;
        cpf: string;
        nome: string;
        email: string;
        telefone: string;
        dataNascimento: Date;
        dataAdmissao: Date;
        dataDesligamento: Date | null;
        cargo: string;
    }[]>;
    findColaboradores(): import("generated/prisma").Prisma.PrismaPromise<{
        id: number;
        funcao: import("generated/prisma").$Enums.FuncaoUsuario;
        cpf: string;
        nome: string;
        email: string;
        telefone: string;
        dataNascimento: Date;
        dataAdmissao: Date;
        dataDesligamento: Date | null;
        cargo: string;
    }[]>;
    findGestores(): import("generated/prisma").Prisma.PrismaPromise<{
        id: number;
        funcao: import("generated/prisma").$Enums.FuncaoUsuario;
        cpf: string;
        nome: string;
        email: string;
        telefone: string;
        dataNascimento: Date;
        dataAdmissao: Date;
        dataDesligamento: Date | null;
        cargo: string;
    }[]>;
    findOne(id: number): Promise<{
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
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<{
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
    remove(id: number, req: RequestWithUser): Promise<{
        id: number;
        dateTimestamp: Date;
        funcao: import("generated/prisma").$Enums.FuncaoUsuario;
        cpf: string;
        nome: string;
        email: string;
        senha: string;
        telefone: string;
        dataNascimento: Date;
        dataAdmissao: Date;
        dataDesligamento: Date | null;
        cargo: string;
    }>;
}
