import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCronogramaDto } from './dto/create-cronograma.dto';
import { UpdateCronogramaDto } from './dto/update-cronograma.dto';

@Injectable()
export class CronogramaService {
	constructor(private prisma: PrismaService) {}

	async create(dto: CreateCronogramaDto, gestorId: number) {
		const demandas = dto.demandasCronograma?.length
			? await this.prisma.demanda.findMany({
					where: {
						id: { in: dto.demandasCronograma },
					},
					select: { id: true },
				})
			: [];

		const demandasIds = demandas.map((u) => u.id);

		return this.prisma.cronograma.create({
			data: {
				...dto,
				gestorUsuarioId: gestorId,
				demandasCronograma: demandasIds.length
					? {
							connect: demandasIds.map((id) => ({ id })),
						}
					: undefined,
			},
		});
	}

	findAll(gestorId: number) {
		return this.prisma.cronograma.findMany({ where: { gestorUsuarioId: gestorId } });
	}

	async findOne(cronogramaId: number, gestorId: number) {
		const cronograma = await this.prisma.cronograma.findFirst({
			where: { id: cronogramaId, gestorUsuarioId: gestorId },
			include: { demandasCronograma: true },
		});

		if (!cronograma)
			throw new NotFoundException('Cronograma não encontrado ou acesso não autorizado');

		return cronograma;
	}

	async update(dto: UpdateCronogramaDto, cronogramaId: number, gestorId: number) {
		await this.findOne(cronogramaId, gestorId);

		this.prisma.cronograma.update({
			where: { id: cronogramaId },
			data: { titulo: dto.titulo, descricao: dto.descricao },
		});

		if (dto.demandasCronograma) {
			const demandasValidas = await this.prisma.demanda.findMany({
				where: {
					id: { in: dto.demandasCronograma },
				},
				select: { id: true },
			});

			const novasDemandas = demandasValidas.map((d) => d.id);

			const demandasAtuais = await this.prisma.demanda.findMany({
				where: { cronogramaId: cronogramaId },
			});

			const idsAtuais = demandasAtuais
				.map((d) => d.cronogramaId)
				.filter((id): id is number => id !== null);

			const remover = idsAtuais.filter((id) => !novasDemandas.includes(id));
			const adicionar = novasDemandas.filter((id) => !idsAtuais.includes(id));

			if (remover.length) {
				await this.prisma.cronograma.update({
					where: { id: cronogramaId },
					data: {
						demandasCronograma: {
							disconnect: remover.map((id) => ({ id: id })),
						},
					},
				});
			}

			if (adicionar.length) {
				await this.prisma.cronograma.update({
					where: { id: cronogramaId },
					data: {
						demandasCronograma: {
							connect: adicionar.map((id) => ({ id: id })),
						},
					},
				});
			}
		}

		return this.prisma.cronograma.findFirst({ where: { id: cronogramaId } });
	}

	async remove(cronogramaId: number, gestorId: number) {
		await this.findOne(cronogramaId, gestorId);

		return this.prisma.cronograma.delete({ where: { id: cronogramaId } });
	}
}
