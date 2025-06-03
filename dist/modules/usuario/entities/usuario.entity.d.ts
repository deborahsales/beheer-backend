import { FuncaoUsuario } from 'generated/prisma';
export declare class UsuarioEntity {
    id: string;
    cpf: string;
    nome: string;
    email: string;
    telefone: string;
    dataNascimento: Date;
    dataAdmissao: Date;
    dataDesligamento?: Date;
    cargo: string;
    funcao: FuncaoUsuario;
}
