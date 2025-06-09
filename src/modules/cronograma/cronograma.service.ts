import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCronogramaDto } from './dto/create-cronograma.dto';
import { UpdateCronogramaDto } from './dto/update-cronograma.dto';

@Injectable()
export class CronogramaService {
	constructor(private prisma: PrismaService) {}

	create(dto: CreateCronogramaDto, gestorId: number) {
		return this.prisma.cronograma.create({
			data: {
				...dto,
				gestorUsuarioId: gestorId,
			},
		});
	}

	findAll(gestorId: number) {
		return this.prisma.cronograma.findMany({ where: { gestorUsuarioId: gestorId } });
	}

	async findOne(cronogramaId: number, gestorId: number) {
		const cronograma = await this.prisma.cronograma.findFirst({
			where: { id: cronogramaId, gestorUsuarioId: gestorId },
		});

		if (!cronograma)
			throw new NotFoundException('Cronograma não encontrado ou acesso não autorizado');

		return cronograma;
	}

	async update(dto: UpdateCronogramaDto, cronogramaId: number, gestorId: number) {
		await this.findOne(cronogramaId, gestorId);

		return this.prisma.cronograma.update({
			where: { id: cronogramaId },
			data: { ...dto },
		});
	}

	async remove(cronogramaId: number, gestorId: number) {
		await this.findOne(cronogramaId, gestorId);

		return this.prisma.cronograma.delete({ where: { id: cronogramaId } });
	}
}
