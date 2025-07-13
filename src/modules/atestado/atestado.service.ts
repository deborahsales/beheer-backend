import { Injectable, NotFoundException } from '@nestjs/common';
import { FuncaoUsuario, StatusAtestado } from 'generated/prisma';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAtestadoDto } from './dto/create-atestado.dto';
import { UpdateAtestadoDto } from './dto/update-atestado.dto';
import { UpdateGerenciamentoAtestadoDto } from './dto/update-gerenciamento-atestado';

@Injectable()
export class AtestadoService {
	constructor(private prisma: PrismaService) {}

	create(dto: CreateAtestadoDto, usuarioId: number) {
		return this.prisma.atestado.create({
			data: {
				...dto,
				usuarioId,
			},
		});
	}

	findAll(funcaoUsuario: string, usuarioId: number) {
		let atestados;

		if (funcaoUsuario === FuncaoUsuario.RH) {
			atestados = this.prisma.atestado.findMany({ include: { gerenciamentoAtestado: true } });
		} else {
			atestados = this.prisma.atestado.findMany({
				where: { usuarioId },
				include: { gerenciamentoAtestado: true, usuario: { select: { nome: true } } },
			});
		}

		return atestados;
	}

	findOne(id: number, funcaoUsuario: string, usuarioId: number) {
		let atestado;

		if (funcaoUsuario === FuncaoUsuario.RH) {
			atestado = this.prisma.atestado.findFirst({
				where: { id },
				include: { gerenciamentoAtestado: true, usuario: { select: { nome: true } } },
			});
		} else {
			atestado = this.prisma.atestado.findFirst({
				where: { id, usuarioId },
				include: { gerenciamentoAtestado: true, usuario: { select: { nome: true } } },
			});
		}

		if (!atestado) throw new NotFoundException('Atestado não encontrado ou acesso não autorizado');

		return atestado;
	}

	async update(dto: UpdateAtestadoDto, id: number, usuarioId: number) {
		const atestado = await this.prisma.atestado.findFirst({ where: { id, usuarioId } });

		if (!atestado) {
			throw new NotFoundException('Atestado não encontrado ou acesso não autorizado');
		}

		if (atestado.status === StatusAtestado.ACEITE || atestado.status === StatusAtestado.RECUSADO)
			throw new NotFoundException('Não é possível editar um atestado que já foi gerenciado');

		return this.prisma.atestado.update({
			where: { id, usuarioId },
			data: { ...dto },
		});
	}

	async updateRh(dto: UpdateGerenciamentoAtestadoDto, id: number, usuarioId: number) {
		const atestado = await this.prisma.atestado.findFirst({ where: { id } });

		if (!atestado) {
			throw new NotFoundException('Atestado não encontrado');
		}

		const atestadoAtualizado = await this.prisma.atestado.update({
			where: { id },
			data: { status: dto.status },
		});

		await this.prisma.gerenciamentoAtestado.create({
			data: {
				atestadoId: id,
				rhUsuarioId: usuarioId,
			},
		});

		return atestadoAtualizado;
	}

	async remove(id: number, usuarioId: number) {
		const atestado = await this.prisma.atestado.findFirst({ where: { id, usuarioId } });

		if (!atestado) throw new NotFoundException('atestado não encontrado ou acesso não autorizado');

		if (atestado.status === StatusAtestado.ACEITE || atestado.status === StatusAtestado.RECUSADO)
			throw new NotFoundException('Não é possível remover um atestado que já foi gerenciado');

		return this.prisma.atestado.delete({
			where: { id, usuarioId: usuarioId },
		});
	}
}
