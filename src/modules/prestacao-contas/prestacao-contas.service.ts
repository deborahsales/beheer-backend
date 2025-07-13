import { Injectable, NotFoundException } from '@nestjs/common';
import { FuncaoUsuario, StatusPrestacao } from 'generated/prisma';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePrestacaoContasDto } from './dto/create-prstacao-contas.dto';
import { UpdateGerenciamentoPrestacaoDto } from './dto/update-gerenciamento-prestacao.dto';
import { UpdatePrestacaoContasDto } from './dto/update-prestacao-contas.dto';

@Injectable()
export class PrestacaoContasService {
	constructor(private prisma: PrismaService) {}

	create(dto: CreatePrestacaoContasDto, usuarioId: number) {
		return this.prisma.prestacaoContas.create({
			data: {
				...dto,
				usuarioId,
			},
		});
	}

	findAll(funcaoUsuario: string, usuarioId: number) {
		let prestacoes;

		if (funcaoUsuario === FuncaoUsuario.RH) {
			prestacoes = this.prisma.prestacaoContas.findMany({
				include: { gerenciamentoPrestacao: true, usuario: { select: { nome: true } } },
			});
		} else {
			prestacoes = this.prisma.prestacaoContas.findMany({
				where: { usuarioId },
				include: { gerenciamentoPrestacao: true, usuario: { select: { nome: true } } },
			});
		}

		return prestacoes;
	}

	findOne(id: number, funcaoUsuario: string, usuarioId: number) {
		let prestacao;

		if (funcaoUsuario === FuncaoUsuario.RH) {
			prestacao = this.prisma.prestacaoContas.findFirst({
				where: { id },
				include: { gerenciamentoPrestacao: true, usuario: { select: { nome: true } } },
			});
		} else {
			prestacao = this.prisma.prestacaoContas.findFirst({
				where: { id, usuarioId },
				include: { gerenciamentoPrestacao: true, usuario: { select: { nome: true } } },
			});
		}

		if (!prestacao)
			throw new NotFoundException('Prestação não encontrada ou acesso não autorizado');

		return prestacao;
	}

	async update(dto: UpdatePrestacaoContasDto, id: number, usuarioId: number) {
		const prestacao = await this.prisma.prestacaoContas.findFirst({ where: { id, usuarioId } });

		if (!prestacao) {
			throw new NotFoundException('Prestação não encontrada ou acesso não autorizado');
		}

		if (
			prestacao.status === StatusPrestacao.ACEITE ||
			prestacao.status === StatusPrestacao.RECUSADA
		)
			throw new NotFoundException('Não é possível editar uma prestação que já foi gerenciada');

		return this.prisma.prestacaoContas.update({
			where: { id, usuarioId },
			data: { ...dto },
		});
	}

	async updateRh(dto: UpdateGerenciamentoPrestacaoDto, id: number, usuarioId: number) {
		const prestacao = await this.prisma.prestacaoContas.findFirst({ where: { id } });

		if (!prestacao) {
			throw new NotFoundException('Prestação não encontrada');
		}

		const prestacaoAtualizado = await this.prisma.prestacaoContas.update({
			where: { id },
			data: { status: dto.status },
		});

		await this.prisma.gerenciamentoPrestacao.create({
			data: {
				prestacaoId: id,
				rhUsuarioId: usuarioId,
			},
		});

		return prestacaoAtualizado;
	}

	async remove(id: number, usuarioId: number) {
		const prestacao = await this.prisma.prestacaoContas.findFirst({ where: { id, usuarioId } });

		if (!prestacao)
			throw new NotFoundException('Prestação não encontrada ou acesso não autorizado');

		if (
			prestacao.status === StatusPrestacao.ACEITE ||
			prestacao.status === StatusPrestacao.RECUSADA
		)
			throw new NotFoundException('Não é possível remover um prestação que já foi gerenciada');

		return this.prisma.prestacaoContas.delete({
			where: { id, usuarioId: usuarioId },
		});
	}
}
