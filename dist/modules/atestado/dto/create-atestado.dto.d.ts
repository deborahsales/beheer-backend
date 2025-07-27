import { DiaInteiro } from 'generated/prisma';
export declare class CreateAtestadoDto {
    dataAtestado: Date;
    horaInicio?: string;
    horaTermino?: string;
    diaInteiro: DiaInteiro;
}
