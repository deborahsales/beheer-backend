import { DiaInteiro } from 'generated/prisma';
export declare class CreateAtestadoDto {
    dataAtestado: Date;
    horaInicio: Date;
    horaTermino: Date;
    diaInteiro: DiaInteiro;
    imagem: string;
}
