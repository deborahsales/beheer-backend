import { DiaInteiro, StatusAtestado } from 'generated/prisma';

export class AtestadoEntity {
	id: number;
	dateTimestamp: Date;
	dataAtestado: Date;
	horaInicio: Date;
	horaTermino: Date;
	diaInteiro: DiaInteiro;
	imagem: string;
	status: StatusAtestado;
	usuarioId: number;
}
