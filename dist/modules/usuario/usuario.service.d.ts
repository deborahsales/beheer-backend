import { PrismaService } from '../prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuarioService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateUsuarioDto): Promise<{
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
    }>;
    findByEmail(email: string): Promise<{
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
        id: number;
    }>;
    update(id: number, dto: UpdateUsuarioDto): Promise<{
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
    }>;
    remove(id: number): Promise<void>;
}
