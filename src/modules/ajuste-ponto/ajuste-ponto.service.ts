import { Injectable, NotFoundException } from '@nestjs/common';
import { FuncaoUsuario, MotivoAjuste, StatusAjuste } from 'generated/prisma';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAjustePontoDto } from './dto/create-ajuste-ponto.dto';
import { UpdateAjustePontoDto } from './dto/update-ajuste-ponto.dto';
import { UpdateGerenciamentoPontoDto } from './dto/update-gerenciamento-ajuste.dto';

@Injectable()
export class AjustePontoService {
	constructor(private prisma: PrismaService) {}

	async create(dto: CreateAjustePontoDto, pontoId: number, usuarioId: number) {
		const ponto = await this.prisma.ponto.findFirst({ where: { id: pontoId, usuarioId } });

		if (!ponto) throw new NotFoundException('Ponto não encontrado ou acesso não autorizado');

		return this.prisma.ajustePonto.create({
			data: {
				...dto,
				pontoId,
				usuarioId,
			},
		});
	}

	findAll(funcaoUsuario: string, usuarioId: number) {
		let ajustes;

		if (funcaoUsuario === FuncaoUsuario.RH) {
			ajustes = this.prisma.ajustePonto.findMany({
				include: { gerenciamentoAjuste: true, usuario: { select: { nome: true } } },
			});
		} else {
			ajustes = this.prisma.ajustePonto.findMany({
				where: { usuarioId },
				include: { gerenciamentoAjuste: true, usuario: { select: { nome: true } } },
			});
		}

		return ajustes;
	}

	findOne(id: number, funcaoUsuario: string, usuarioId: number) {
		let ajustes;

		if (funcaoUsuario === FuncaoUsuario.RH) {
			ajustes = this.prisma.ajustePonto.findFirst({
				where: { id },
				include: { gerenciamentoAjuste: true, usuario: { select: { nome: true } } },
			});
		} else {
			ajustes = this.prisma.ajustePonto.findFirst({
				where: { id, usuarioId },
				include: { gerenciamentoAjuste: true, usuario: { select: { nome: true } } },
			});
		}

		if (!ajustes) throw new NotFoundException('Ajuste não encontrado ou acesso não autorizado');

		return ajustes;
	}

	async update(dto: UpdateAjustePontoDto, id: number, usuarioId: number) {
		const ajuste = await this.prisma.ajustePonto.findFirst({ where: { id, usuarioId } });

		if (!ajuste) {
			throw new NotFoundException('Ajuste não encontrado ou acesso não autorizado');
		}

		if (ajuste.status === StatusAjuste.AJUSTADO || ajuste.status === StatusAjuste.RECUSADO)
			throw new NotFoundException(
				'Não é possível editar uma solicitação de ajuste que já foi gerenciado',
			);

		return this.prisma.ajustePonto.update({
			where: { id, usuarioId },
			data: { dateTimestampAjustado: dto.dateTimestampAjustado, motivo: dto.motivo },
		});
	}

	async updateRh(dto: UpdateGerenciamentoPontoDto, id: number, usuarioId: number) {
		const ajuste = await this.prisma.ajustePonto.findFirst({ where: { id } });

		if (!ajuste) {
			throw new NotFoundException('Ajuste não encontrado');
		}

		const ajusteAtualizado = await this.prisma.ajustePonto.update({
			where: { id },
			data: { status: dto.status },
		});

		if (ajuste.motivo === MotivoAjuste.DUPLICADO) {
			await this.prisma.ponto.update({
				where: { id: ajuste.pontoId },
				data: {
					ativo: false,
				},
			});
		} else {
			await this.prisma.ponto.update({
				where: { id: ajuste.pontoId },
				data: {
					dateTimestamp: ajuste.dateTimestampAjustado,
				},
			});
		}

		await this.prisma.gerenciamentoAjustePonto.create({
			data: {
				ajustePontoId: id,
				rhUsuarioId: usuarioId,
			},
		});

		return ajusteAtualizado;
	}

	async remove(id: number, usuarioId: number) {
		const ajuste = await this.prisma.ajustePonto.findFirst({ where: { id, usuarioId } });

		if (!ajuste) throw new NotFoundException('Ajuste não encontrado ou acesso não autorizado');

		if (ajuste.status === StatusAjuste.AJUSTADO || ajuste.status === StatusAjuste.RECUSADO)
			throw new NotFoundException(
				'Não é possível remover uma solicitação de ajuste que já foi gerenciado',
			);

		return this.prisma.ajustePonto.delete({
			where: { id, usuarioId: usuarioId },
		});
	}
}
