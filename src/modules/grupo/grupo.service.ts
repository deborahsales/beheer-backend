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
		const colaboradores = dto.usuarios?.length
			? await this.prisma.usuario.findMany({
					where: {
						id: { in: dto.usuarios },
						funcao: FuncaoUsuario.COLABORADOR,
					},
					select: { id: true },
				})
			: [];

		const colaboradorIds = colaboradores.map((u) => u.id);

		return this.prisma.grupo.create({
			data: {
				nome: dto.nome,
				descricao: dto.descricao,
				gestores: {
					create: {
						usuarioId: gestorId,
					},
				},
				usuarios: colaboradorIds.length
					? {
							create: colaboradorIds.map((id) => ({
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

	async findOne(id: number, usuarioId: number) {
		const grupo = await this.prisma.grupo.findFirst({
			where: {
				id: id,
				OR: [
					{
						gestores: {
							some: { usuarioId },
						},
					},
					{
						usuarios: {
							some: { usuarioId },
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
		if (!grupo) throw new NotFoundException('Grupo não encontrado ou acesso não autorizado');

		return grupo;
	}

	async update(id: number, dto: UpdateGrupoDto, gestorId: number) {
		await this.findOne(id, gestorId);

		await this.prisma.grupo.update({
			where: { id: id },
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
				where: { grupoId: id },
				select: { usuarioId: true },
			});

			const idsAtuais = usuariosAtuais.map((u) => u.usuarioId);

			const remover = idsAtuais.filter((id) => !novosUsuarios.includes(id));
			const adicionar = novosUsuarios.filter((id) => !idsAtuais.includes(id));

			if (remover.length) {
				await this.prisma.usuarioGrupo.deleteMany({
					where: {
						grupoId: id,
						usuarioId: { in: remover },
					},
				});
			}

			if (adicionar.length) {
				await this.prisma.usuarioGrupo.createMany({
					data: adicionar.map((usuarioId) => ({ usuarioId, grupoId: id })),
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

			let novosGestores = gestoresValidos.map((u) => u.id);

			if (!novosGestores.includes(gestorId)) {
				novosGestores.push(gestorId);
			}

			const gestoresAtuais = await this.prisma.grupoGestor.findMany({
				where: { grupoId: id },
				select: { usuarioId: true },
			});

			const idsAtuaisGestores = gestoresAtuais.map((u) => u.usuarioId);

			const removerGestores = idsAtuaisGestores
				.filter((id) => !novosGestores.includes(id))
				.filter((id) => id !== gestorId);
			const adicionarGestores = novosGestores.filter((id) => !idsAtuaisGestores.includes(id));

			if (removerGestores.length) {
				await this.prisma.grupoGestor.deleteMany({
					where: {
						grupoId: id,
						usuarioId: { in: removerGestores },
					},
				});
			}

			if (adicionarGestores.length) {
				await this.prisma.grupoGestor.createMany({
					data: adicionarGestores.map((usuarioId) => ({ usuarioId, grupoId: id })),
					skipDuplicates: true,
				});
			}
		}

		return this.findOne(id, gestorId);
	}

	async remove(id: number, gestorId: number) {
		await this.findOne(id, gestorId);
		return this.prisma.grupo.delete({ where: { id: id } });
	}
}
