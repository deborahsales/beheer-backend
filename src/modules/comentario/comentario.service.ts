import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';

@Injectable()
export class ComentarioService {
	constructor(private prisma: PrismaService) {}

	async create(dto: CreateComentarioDto, usuarioId: number) {
		const demanda = await this.prisma.demanda.findFirst({
			where: {
				id: dto.demandaId,
				OR: [
					{ usuariosDemanda: { some: { usuarioId: usuarioId } } },
					{ gestorUsuarioId: usuarioId },
				],
			},
		});

		if (!demanda) throw new NotFoundException('Demanda não encontrada ou acesso não autorizado');

		const comentario = await this.prisma.comentario.create({
			data: {
				...dto,
				usuarioId: usuarioId,
			},
		});

		return comentario;
	}

	async findAll(demandaId: number, usuarioId: number) {
		const demanda = await this.prisma.demanda.findFirst({
			where: {
				id: Number(demandaId),
				OR: [
					{ usuariosDemanda: { some: { usuarioId: usuarioId } } },
					{ gestorUsuarioId: usuarioId },
				],
			},
		});
		if (!demanda) throw new NotFoundException('Demanda não encontrada ou acesso não autorizado');

		return this.prisma.comentario.findMany({ where: { demandaId: Number(demandaId) } });
	}

	async findOne(comentarioId: number) {
		const comentario = await this.prisma.comentario.findFirst({
			where: { id: Number(comentarioId) },
		});
		if (!comentario) throw new NotFoundException('Comentário não encontrado');

		return comentario;
	}

	async update(dto: UpdateComentarioDto, comentarioId: number, usuarioId: number) {
		const comentario = await this.prisma.comentario.findFirst({
			where: { id: Number(comentarioId), usuarioId: Number(usuarioId) },
		});
		if (!comentario)
			throw new NotFoundException('Comentário não encontrado  ou acesso não autorizado');

		const resultado = await this.prisma.comentario.update({
			where: { id: Number(comentarioId), usuarioId: Number(usuarioId) },
			data: {
				...dto,
			},
		});

		return resultado;
	}

	async remove(comentarioId: number, usuarioId: number) {
		const comentario = await this.prisma.comentario.findFirst({
			where: { id: Number(comentarioId), usuarioId: Number(usuarioId) },
		});
		if (!comentario)
			throw new NotFoundException('Comentário não encontrado ou acesso não autorizado');

		return this.prisma.comentario.delete({
			where: { id: Number(comentarioId), usuarioId: Number(usuarioId) },
		});
	}
}
