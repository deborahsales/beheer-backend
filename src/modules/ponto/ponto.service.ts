import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePontoDto } from './dto/create-ponto.dto';
import { UpdatePontoDto } from './dto/update-ponto.dto';

@Injectable()
export class PontoService {
	constructor(private prisma: PrismaService) {}

	create(dto: CreatePontoDto, usuarioId: number, ip: string) {
		if (!ip?.trim()) throw new NotFoundException('Endereço ip não identificado');

		return this.prisma.ponto.create({
			data: {
				...dto,
				usuarioId,
				ip,
			},
		});
	}

	findAll(usuarioId: number) {
		return this.prisma.ponto.findMany({ where: { usuarioId } });
	}

	async findOne(id: number) {
		const ponto = await this.prisma.ponto.findFirst({ where: { id } });

		if (!ponto) throw new NotFoundException('Ponto não encontrado');

		return ponto;
	}

	async findOneWithUser(id: number, usuarioId: number) {
		const ponto = await this.prisma.ponto.findFirst({ where: { id, usuarioId } });

		if (!ponto) throw new NotFoundException('Ponto não encontrado ou acesso não autorizado');

		return ponto;
	}

	async update(dto: UpdatePontoDto, id: number) {
		await this.findOne(id);

		return this.prisma.ponto.update({ where: { id }, data: { ...dto } });
	}

	async remove(id: number) {
		await this.findOne(id);

		return this.prisma.ponto.delete({ where: { id } });
	}
}
