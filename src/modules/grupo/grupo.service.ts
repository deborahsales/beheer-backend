import { Injectable, NotFoundException } from '@nestjs/common';
import { FuncaoUsuario } from 'generated/prisma';
import { PrismaService } from '../prisma/prisma.service';
import { userSelect } from '../usuario/types/user-select.type';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';

@Injectable()
export class GrupoService {
	constructor(private prisma: PrismaService) {}

	async create(dto: CreateGrupoDto, gestorId: number) {
		const grupo = await this.prisma.grupo.create({
			data: {
				nome: dto.nome,
				descricao: dto.descricao,
				gestores: {
					create: {
						usuarioId: gestorId,
					},
				},
				usuarios: dto.usuarios?.length
					? {
							create: dto.usuarios.map((id) => ({
								usuarioId: id,
							})),
						}
					: undefined,
			},
			include: {
				gestores: {
					include: {
						usuario: { select: userSelect },
					},
				},
				usuarios: {
					include: {
						usuario: { select: userSelect },
					},
				},
			},
		});

		return grupo;
	}

	findAll(usuarioId: number) {
		return this.prisma.grupo.findMany({
			where: {
				OR: [
					{
						gestores: {
							some: {
								usuarioId: usuarioId,
							},
						},
					},
					{
						usuarios: {
							some: {
								usuarioId: usuarioId,
							},
						},
					},
				],
			},
			include: {
				gestores: {
					include: {
						usuario: { select: userSelect },
					},
				},
				usuarios: {
					include: {
						usuario: { select: userSelect },
					},
				},
			},
		});
	}

	async findOne(id: number, gestorId?: number) {
		const grupo = await this.prisma.grupo.findFirst({
			where: {
				id: Number(id),
				...(gestorId && {
					gestores: {
						some: {
							usuarioId: gestorId,
						},
					},
				}),
			},
			include: {
				gestores: {
					include: {
						usuario: { select: userSelect },
					},
				},
				usuarios: {
					include: {
						usuario: { select: userSelect },
					},
				},
			},
		});
		if (!grupo) throw new NotFoundException('Grupo não encontrado');

		return grupo;
	}

	async update(id: number, dto: UpdateGrupoDto, gestorId: number) {
		const grupo = await this.findOne(id, gestorId);
		if (!grupo) throw new NotFoundException('Grupo não encontrado ou acesso não autorizado');

		await this.prisma.grupo.update({
			where: { id: Number(id) },
			data: {
				nome: dto.nome,
				descricao: dto.descricao,
			},
		});

		// Atualiza colaboradores
		if (dto.usuarios) {
			const usuariosValidos = await this.prisma.usuario.findMany({
				where: {
					id: { in: dto.usuarios },
					funcao: FuncaoUsuario.COLABORADOR,
				},
				select: { id: true },
			});

			const novosUsuarios = usuariosValidos.map((u) => u.id);

			const usuariosAtuais = await this.prisma.usuarioGrupo.findMany({
				where: { grupoId: Number(id) },
				select: { usuarioId: true },
			});

			const idsAtuais = usuariosAtuais.map((u) => u.usuarioId);

			const remover = idsAtuais.filter((id) => !novosUsuarios.includes(id));
			const adicionar = novosUsuarios.filter((id) => !idsAtuais.includes(id));

			if (remover.length) {
				await this.prisma.usuarioGrupo.deleteMany({
					where: {
						grupoId: Number(id),
						usuarioId: { in: remover },
					},
				});
			}

			if (adicionar.length) {
				await this.prisma.usuarioGrupo.createMany({
					data: adicionar.map((usuarioId) => ({ usuarioId, grupoId: Number(id) })),
					skipDuplicates: true,
				});
			}
		}

		// Atualiza gestores
		if (dto.gestores) {
			const gestoresValidos = await this.prisma.usuario.findMany({
				where: {
					id: { in: dto.gestores },
					funcao: FuncaoUsuario.GESTOR,
				},
				select: { id: true },
			});

			const novosGestores = gestoresValidos.map((u) => u.id);

			const gestoresAtuais = await this.prisma.usuarioGrupo.findMany({
				where: { grupoId: Number(id) },
				select: { usuarioId: true },
			});

			const idsAtuais = gestoresAtuais.map((u) => u.usuarioId);

			const remover = idsAtuais.filter((id) => !novosGestores.includes(id));
			const adicionar = novosGestores.filter((id) => !idsAtuais.includes(id));

			if (remover.length) {
				await this.prisma.grupoGestor.deleteMany({
					where: {
						grupoId: Number(id),
						usuarioId: { in: remover },
					},
				});
			}

			if (adicionar.length) {
				await this.prisma.grupoGestor.createMany({
					data: adicionar.map((usuarioId) => ({ usuarioId, grupoId: Number(id) })),
					skipDuplicates: true,
				});
			}
		}

		return this.findOne(id);
	}

	async remove(id: number, gestorId: number) {
		const grupo = await this.findOne(id, gestorId);
		if (!grupo) throw new NotFoundException('Grupo não encontrado ou acesso não autorizado');
		await this.prisma.grupo.delete({ where: { id: Number(id) } });
	}
}
