import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { AtestadoService } from './atestado.service';
import { CreateAtestadoDto } from './dto/create-atestado.dto';
import { UpdateAtestadoDto } from './dto/update-atestado.dto';
import { UpdateGerenciamentoAtestadoDto } from './dto/update-gerenciamento-atestado';
export declare class AtestadoController {
    private atestadoService;
    constructor(atestadoService: AtestadoService);
    create(dto: CreateAtestadoDto, imagem: Express.Multer.File, req: RequestWithUser): import("generated/prisma").Prisma.Prisma__AtestadoClient<{
        usuario: {
            id: number;
            dateTimestamp: Date;
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
        };
    } & {
        status: import("generated/prisma").$Enums.StatusAtestado;
        id: number;
        dateTimestamp: Date;
        imagem: string;
        usuarioId: number;
        dataAtestado: Date;
        horaInicio: Date | null;
        horaTermino: Date | null;
        diaInteiro: import("generated/prisma").$Enums.DiaInteiro;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(req: RequestWithUser): any;
    findOne(id: number, req: RequestWithUser): any;
    update(id: number, updateAtestadoDto: UpdateAtestadoDto, req: RequestWithUser): Promise<{
        status: import("generated/prisma").$Enums.StatusAtestado;
        id: number;
        dateTimestamp: Date;
        imagem: string;
        usuarioId: number;
        dataAtestado: Date;
        horaInicio: Date | null;
        horaTermino: Date | null;
        diaInteiro: import("generated/prisma").$Enums.DiaInteiro;
    }>;
    updateRh(id: number, UpdateAtestadoDto: UpdateGerenciamentoAtestadoDto, req: RequestWithUser): Promise<{
        status: import("generated/prisma").$Enums.StatusAtestado;
        id: number;
        dateTimestamp: Date;
        imagem: string;
        usuarioId: number;
        dataAtestado: Date;
        horaInicio: Date | null;
        horaTermino: Date | null;
        diaInteiro: import("generated/prisma").$Enums.DiaInteiro;
    }>;
    delete(id: number, req: RequestWithUser): Promise<{
        status: import("generated/prisma").$Enums.StatusAtestado;
        id: number;
        dateTimestamp: Date;
        imagem: string;
        usuarioId: number;
        dataAtestado: Date;
        horaInicio: Date | null;
        horaTermino: Date | null;
        diaInteiro: import("generated/prisma").$Enums.DiaInteiro;
    }>;
}
