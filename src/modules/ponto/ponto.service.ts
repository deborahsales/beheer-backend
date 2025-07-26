import { Injectable, NotFoundException } from '@nestjs/common';
import { FuncaoUsuario } from 'generated/prisma';
import { PrismaService } from '../prisma/prisma.service';
import { UpdatePontoDto } from './dto/update-ponto.dto';

@Injectable()
export class PontoService {
	constructor(private prisma: PrismaService) {}

	create(dto: any, usuarioId: number, ip: string) {
		if (!ip?.trim()) throw new NotFoundException('Endereço ip não identificado');

		return this.prisma.ponto.create({
			data: {
				...dto,
				usuarioId,
				ip,
			},
			include: {
				usuario: { select: { id: true, nome: true } },
			},
		});
	}

	async findAll(funcaoUsuario: string, usuarioId: number) {
		let pontos;

		if (funcaoUsuario === FuncaoUsuario.RH) {
			pontos = await this.prisma.ponto.findMany({
				where: { ativo: true },
				include: { usuario: { select: { nome: true } } },
			});
		} else {
			pontos = await this.prisma.ponto.findMany({
				where: { usuarioId, ativo: true },
				include: { usuario: { select: { nome: true } } },
			});
		}

		return pontos;
	}

	async findOne(id: number, funcaoUsuario: string, usuarioId: number) {
		let ponto;

		if (funcaoUsuario === FuncaoUsuario.RH) {
			ponto = await this.prisma.ponto.findFirst({
				where: { id },
				include: { usuario: { select: { nome: true } } },
			});
		} else {
			ponto = await this.prisma.ponto.findFirst({
				where: { id, usuarioId },
				include: { usuario: { select: { nome: true } } },
			});
		}

		if (!ponto) throw new NotFoundException('Ponto não encontrado ou acesso não autorizado');

		return ponto;
	}

	async update(dto: UpdatePontoDto, id: number) {
		const ponto = await this.prisma.ponto.findFirst({ where: { id } });

		if (!ponto) throw new NotFoundException('Ponto não encontrado');

		return this.prisma.ponto.update({ where: { id }, data: { ...dto } });
	}

	async remove(id: number) {
		const ponto = await this.prisma.ponto.findFirst({ where: { id } });

		if (!ponto) throw new NotFoundException('Ponto não encontrado');

		return this.prisma.ponto.delete({ where: { id } });
	}
}
