import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { FuncaoUsuario } from 'generated/prisma';
import { toDateOnly } from 'src/common/utils/to-date-only';
import { PrismaService } from '../prisma/prisma.service';
import { userSelect } from '../usuario/types/user-select.type';
import { CreateDemandaDto } from './dto/create-demanda.dto';
import { FilterDemandasDto } from './dto/filter-demanda.dto';
import { UpdateDemandaDto } from './dto/update-demanda.dto';

@Injectable()
export class DemandaService {
	constructor(private prisma: PrismaService) {}

	async create(dto: CreateDemandaDto, gestorId: number) {
		if (dto.cronogramaId) {
			const cronograma = await this.prisma.cronograma.findUnique({
				where: { id: dto.cronogramaId },
			});

			if (!cronograma) throw new NotFoundException('Conograma não encontrado!');

			if (dto.prazo) {
				const dataInicio = toDateOnly(new Date(cronograma.dataInicio));
				const dataTermino = toDateOnly(new Date(cronograma.dataTermino));
				const prazo = toDateOnly(new Date(dto.prazo));

				if (prazo < dataInicio || prazo > dataTermino) {
					throw new ForbiddenException('O prazo da demanda não é compatível com o cronograma');
				}
			}
		}

		const usuarios = dto.usuariosDemanda?.length
			? await this.prisma.usuario.findMany({
					where: {
						id: { in: dto.usuariosDemanda },
					},
					select: { id: true },
				})
			: [];

		const usuariosIds = usuarios.map((u) => u.id);

		const grupos = dto.gruposDemanda?.length
			? await this.prisma.grupo.findMany({
					where: {
						id: { in: dto.gruposDemanda },
					},
					select: { id: true },
				})
			: [];

		const gruposIds = grupos.map((u) => u.id);

		return this.prisma.demanda.create({
			data: {
				...dto,
				gestorUsuarioId: gestorId,
				usuariosDemanda: usuariosIds.length
					? {
							create: usuariosIds.map((id) => ({ usuarioId: id })),
						}
					: undefined,
				gruposDemanda: gruposIds.length
					? {
							create: gruposIds.map((id) => ({ grupoId: id })),
						}
					: undefined,
			},
		});
	}

	async atualizarDemandasAtrasadasPorFiltro(whereFilter: any) {
		const hoje = new Date();
		hoje.setHours(0, 0, 0, 0);

		await this.prisma.demanda.updateMany({
			where: {
				AND: [
					whereFilter,
					{ prazo: { lt: hoje.toISOString() } },
					{ status: { notIn: ['ATRASADA', 'FINALIZADA'] } },
				],
			},
			data: { status: 'ATRASADA' },
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

		const filtroWhere = {
			OR: [
				{ gestorUsuarioId: usuarioId },
				{ usuariosDemanda: { some: { usuarioId: usuarioId } } },
				{ gruposDemanda: { some: { grupoId: { in: grupoIds } } } },
			],
			...(status ? { status: status } : {}),
			...(prioridade ? { prioridade: prioridade } : {}),
		};

		await this.atualizarDemandasAtrasadasPorFiltro(filtroWhere);

		return this.prisma.demanda.findMany({
			where: filtroWhere,
			include: {
				usuariosDemanda: true,
				gruposDemanda: true,
			},
		});
	}

	async findAllByGroup(groupId: number, filters: FilterDemandasDto) {
		const { status, prioridade } = filters;

		const filtroWhere = {
			OR: [{ gruposDemanda: { some: { grupoId: groupId } } }],
			...(status ? { status: status } : {}),
			...(prioridade ? { prioridade: prioridade } : {}),
		};

		await this.atualizarDemandasAtrasadasPorFiltro(filtroWhere);

		return this.prisma.demanda.findMany({
			where: filtroWhere,
		});
	}

	async findAllByTimeline(timelineId: number, filters: FilterDemandasDto) {
		const { status, prioridade } = filters;

		const filtroWhere = {
			OR: [{ cronogramaId: timelineId }],
			...(status ? { status: status } : {}),
			...(prioridade ? { prioridade: prioridade } : {}),
		};

		await this.atualizarDemandasAtrasadasPorFiltro(filtroWhere);

		return this.prisma.demanda.findMany({
			where: filtroWhere,
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
				cronograma: true,
			},
		});

		if (!demanda) throw new NotFoundException('Demanda não encontrada ou acesso não autorizado');

		return demanda;
	}

	async updateStatus(id: number, dto: UpdateDemandaDto, usuarioId: number) {
		await this.findOne(id);

		return this.prisma.demanda.update({
			where: { id: id },
			data: {
				status: dto.status,
			},
		});
	}

	async update(id: number, dto: UpdateDemandaDto, gestorId: number) {
		await this.findOne(id, gestorId);

		if (dto.cronogramaId) {
			const cronograma = await this.prisma.cronograma.findUnique({
				where: { id: dto.cronogramaId },
			});

			if (!cronograma) throw new NotFoundException('Conograma não encontrado!');

			if (dto.prazo) {
				const dataInicio = toDateOnly(new Date(cronograma.dataInicio));
				const dataTermino = toDateOnly(new Date(cronograma.dataTermino));
				const prazo = toDateOnly(new Date(dto.prazo));

				if (prazo < dataInicio || prazo > dataTermino) {
					throw new ForbiddenException('O prazo da demanda não é compatível com o cronograma');
				}
			}
		}

		await this.prisma.demanda.update({
			where: { id: id },
			data: {
				titulo: dto.titulo,
				descricao: dto.descricao,
				prazo: dto.prazo,
				status: dto.status,
				prioridade: dto.prioridade,
				cronogramaId: dto.cronogramaId,
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
