import { Injectable, NotFoundException } from '@nestjs/common';
import { FuncaoUsuario } from 'generated/prisma';
import { PrismaService } from '../prisma/prisma.service';
import { userSelect } from '../usuario/types/user-select.type';
import { CreateDemandaDto } from './dto/create-demanda.dto';
import { FilterDemandasDto } from './dto/filter-demanda.dto';
import { UpdateDemandaDto } from './dto/update-demanda.dto';

@Injectable()
export class DemandaService {
	constructor(private prisma: PrismaService) {}

	create(dto: CreateDemandaDto, gestorId: number) {
		return this.prisma.demanda.create({
			data: { ...dto, gestorUsuarioId: gestorId },
		});
	}

	async findAll(usuarioId: number, filters: FilterDemandasDto) {
		const gruposUsuario = await this.prisma.grupo.findMany({
			where: {
				usuarios: {
					some: {
						usuarioId: usuarioId,
					},
				},
			},
			include: {
				usuarios: {
					include: {
						usuario: { select: userSelect },
					},
				},
			},
		});

		const grupoIds = gruposUsuario.map((grupo) => grupo.id);

		const { status, prioridade } = filters;

		return this.prisma.demanda.findMany({
			where: {
				OR: [
					{
						gestorUsuarioId: usuarioId,
					},
					{
						usuariosDemanda: {
							some: { usuarioId: usuarioId },
						},
					},
					{
						gruposDemanda: {
							some: {
								grupoId: {
									in: grupoIds,
								},
							},
						},
					},
				],
				status: status ? { equals: status } : undefined,
				prioridade: prioridade ? { equals: prioridade } : undefined,
			},
			include: {
				usuariosDemanda: true,
				gruposDemanda: true,
			},
		});
	}

	async findAllByGroup(groupId: number, filters: FilterDemandasDto) {
		const { status, prioridade } = filters;

		return this.prisma.demanda.findMany({
			where: {
				OR: [
					{
						gruposDemanda: {
							some: {
								grupoId: groupId,
							},
						},
					},
				],
				status: status ? { equals: status } : undefined,
				prioridade: prioridade ? { equals: prioridade } : undefined,
			},
		});
	}

	async findOne(id: number, gestorId?: number) {
		const demanda = await this.prisma.demanda.findFirst({
			where: {
				id: id,
				...(gestorId && {
					gestorUsuarioId: gestorId,
				}),
			},
			include: {
				usuariosDemanda: { include: { usuario: { select: { nome: true } } } },
				gruposDemanda: { include: { grupo: { select: { nome: true } } } },
				comentariosDemanda: true,
				gestor: { select: { nome: true } },
			},
		});

		if (!demanda) throw new NotFoundException('Demanda não encontrada ou acesso não autorizado');

		return demanda;
	}

	async update(id: number, dto: UpdateDemandaDto, gestorId: number) {
		await this.findOne(id, gestorId);

		await this.prisma.demanda.update({
			where: { id: id },
			data: {
				titulo: dto.titulo,
				descricao: dto.descricao,
				prazo: dto.prazo,
				status: dto.status,
				prioridade: dto.prioridade,
			},
		});

		// Atualiza colaboradores
		if (dto.usuariosDemanda) {
			const usuariosValidos = await this.prisma.usuario.findMany({
				where: {
					id: { in: dto.usuariosDemanda },
					funcao: FuncaoUsuario.COLABORADOR,
				},
				select: { id: true },
			});

			const novosUsuarios = usuariosValidos.map((u) => u.id);

			const usuariosAtuais = await this.prisma.demandaUsuario.findMany({
				where: { demandaId: id },
				select: { usuarioId: true },
			});

			const idsAtuais = usuariosAtuais.map((u) => u.usuarioId);

			const remover = idsAtuais.filter((id) => !novosUsuarios.includes(id));
			const adicionar = novosUsuarios.filter((id) => !idsAtuais.includes(id));

			if (remover.length) {
				await this.prisma.demandaUsuario.deleteMany({
					where: {
						demandaId: id,
						usuarioId: { in: remover },
					},
				});
			}

			if (adicionar.length) {
				await this.prisma.demandaUsuario.createMany({
					data: adicionar.map((usuarioId) => ({ usuarioId, demandaId: id })),
					skipDuplicates: true,
				});
			}
		}

		// Atualiza grupos
		if (dto.gruposDemanda) {
			const gruposValidos = await this.prisma.grupo.findMany({
				where: {
					id: { in: dto.gruposDemanda },
				},
				select: { id: true },
			});

			const novosGrupos = gruposValidos.map((u) => u.id);

			const gruposAtuais = await this.prisma.demandaGrupo.findMany({
				where: { demandaId: id },
				select: { grupoId: true },
			});

			const idsAtuais = gruposAtuais.map((u) => u.grupoId);

			const remover = idsAtuais.filter((id) => !novosGrupos.includes(id));
			const adicionar = novosGrupos.filter((id) => !idsAtuais.includes(id));

			if (remover.length) {
				await this.prisma.demandaGrupo.deleteMany({
					where: {
						demandaId: id,
						grupoId: { in: remover },
					},
				});
			}

			if (adicionar.length) {
				await this.prisma.demandaGrupo.createMany({
					data: adicionar.map((grupoId) => ({ grupoId, demandaId: id })),
					skipDuplicates: true,
				});
			}
		}

		return this.findOne(id);
	}

	async remove(id: number, gestorId: number) {
		await this.findOne(id, gestorId);
		return this.prisma.demanda.delete({ where: { id: id } });
	}
}
