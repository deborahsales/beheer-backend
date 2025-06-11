import { GerenciamentoPrestacao, StatusPrestacao } from 'generated/prisma';
export declare class PrestacaoContasEntity {
    id: number;
    descricao: string;
    data: Date;
    dateTimestamp: Date;
    valor: number;
    imagem: string;
    status: StatusPrestacao;
    usuarioId: number;
    gerenciamentoPrestacao: GerenciamentoPrestacao[];
}
