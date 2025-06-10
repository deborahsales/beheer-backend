import { Injectable, NotFoundException } from '@nestjs/common';
import { FuncaoUsuario } from 'generated/prisma';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAjustePontoDto } from './dto/create-ajuste-ponto.dto';
import { UpdateAjustePontoDto } from './dto/update-ajuste-ponto.dto';

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
			ajustes = this.prisma.ajustePonto.findMany();
		} else {
			ajustes = this.prisma.ajustePonto.findMany({ where: { usuarioId } });
		}

		return ajustes;
	}

	findOne(id: number, funcaoUsuario: string, usuarioId: number) {
		let ajustes;

		if (funcaoUsuario === FuncaoUsuario.RH) {
			ajustes = this.prisma.ajustePonto.findFirst({ where: { id } });
		} else {
			ajustes = this.prisma.ajustePonto.findFirst({ where: { id, usuarioId } });
		}

		if (!ajustes) throw new NotFoundException('Ajuste não encontrado ou acesso não autorizado');

		return ajustes;
	}

	async update(dto: UpdateAjustePontoDto, id: number, usuarioId: number) {
		const ajuste = await this.prisma.ajustePonto.findFirst({ where: { id, usuarioId } });

		if (!ajuste) throw new NotFoundException('Ajuste não encontrado ou acesso não autorizado');

		return this.prisma.ajustePonto.update({
			where: { id, usuarioId: usuarioId },
			data: {
				...dto,
			},
		});
	}

	async remove(id: number, usuarioId: number) {
		const ajuste = await this.prisma.ajustePonto.findFirst({ where: { id, usuarioId } });

		if (!ajuste) throw new NotFoundException('Ajuste não encontrado ou acesso não autorizado');

		return this.prisma.ajustePonto.delete({
			where: { id, usuarioId: usuarioId },
		});
	}
}
