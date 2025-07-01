import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<{
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
    findAllRh(req: RequestWithUser): import("generated/prisma").Prisma.PrismaPromise<{
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
    }[]>;
    findAll(req: RequestWithUser): import("generated/prisma").Prisma.PrismaPromise<{
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
    }[]>;
    findColaboradores(): import("generated/prisma").Prisma.PrismaPromise<{
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
    }[]>;
    findGestores(): import("generated/prisma").Prisma.PrismaPromise<{
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
    }[]>;
    findOne(id: number): Promise<{
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
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<{
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
    remove(id: number, req: RequestWithUser): Promise<{
        id: number;
        cpf: string;
        nome: string;
        email: string;
        senha: string;
        telefone: string;
        dataNascimento: Date;
        dataAdmissao: Date;
        dataDesligamento: Date | null;
        cargo: string;
        funcao: import("generated/prisma").$Enums.FuncaoUsuario;
        dateTimestamp: Date;
    }>;
}
