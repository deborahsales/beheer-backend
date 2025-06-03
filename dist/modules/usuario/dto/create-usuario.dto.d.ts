import { FuncaoUsuario } from 'generated/prisma';
export declare class CreateUsuarioDto {
    cpf: string;
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    dataNascimento: Date;
    dataAdmissao: Date;
    dataDesligamento?: Date;
    cargo: string;
    funcao: FuncaoUsuario;
}
