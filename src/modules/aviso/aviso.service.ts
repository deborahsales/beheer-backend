import { Injectable, NotFoundException } from '@nestjs/common';
import { StatusAviso } from 'generated/prisma';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAvisoDto } from './dto/create-aviso.dto';
import { UpdateAvisoDto } from './dto/update-aviso.dto';

@Injectable()
export class AvisoService {
	constructor(private prisma: PrismaService) {}

	async create(dto: CreateAvisoDto, usuarioId: number) {
		const usuarios = dto.avisoUsuario?.length
			? await this.prisma.usuario.findMany({
					where: {
						id: { in: dto.avisoUsuario },
					},
					select: { id: true },
				})
			: [];

		const usuariosIds = usuarios.map((u) => u.id);

		return this.prisma.aviso.create({
			data: {
				assunto: dto.assunto,
				conteudo: dto.conteudo,
				gestorRhUsuarioId: usuarioId,
				avisoUsuario: usuariosIds.length
					? {
							create: usuariosIds.map((id) => ({ usuarioId: id })),
						}
					: undefined,
			},
		});
	}

	async findAll(usuarioId: number) {
		const avisos = await this.prisma.aviso.findMany({
			where: {
				OR: [{ avisoUsuario: { some: { usuarioId } } }, { gestorRhUsuarioId: usuarioId }],
			},
			include: {
				avisoUsuario: true,
				gestor: {
					select: {
						id: true,
						nome: true,
					},
				},
			},
		});

		return avisos.map((aviso) => {
			const isCriador = aviso.gestorRhUsuarioId === usuarioId;

			return {
				...aviso,
				avisoUsuario: isCriador
					? aviso.avisoUsuario
					: aviso.avisoUsuario.filter((a) => a.usuarioId === usuarioId),
			};
		});
	}

	async findOne(avisoId: number, usuarioId: number) {
		const aviso = await this.prisma.aviso.findFirst({
			where: {
				id: avisoId,
				OR: [
					{ avisoUsuario: { some: { usuarioId: usuarioId } } },
					{ gestorRhUsuarioId: usuarioId },
				],
			},
			include: {
				avisoUsuario: {
					include: {
						usuario: {
							select: { nome: true },
						},
					},
				},
				gestor: {
					select: {
						id: true,
						nome: true,
					},
				},
			},
		});

		if (!aviso) throw new NotFoundException('Aviso não encontrado ou acesso não autorizado');

		const isCriador = aviso.gestorRhUsuarioId === usuarioId;

		return {
			...aviso,
			avisoUsuario: isCriador
				? aviso.avisoUsuario
				: aviso.avisoUsuario.filter((a) => a.usuarioId === usuarioId),
		};
	}

	async updateLido(avisoId: number, usuarioId: number) {
		await this.findOne(avisoId, usuarioId);
		return this.prisma.avisoUsuario.update({
			where: {
				usuarioId_avisoId: {
					usuarioId,
					avisoId,
				},
			},
			data: {
				status: StatusAviso.LIDO,
			},
		});
	}

	async update(dto: UpdateAvisoDto, avisoId: number, usuarioId: number) {
		const aviso = await this.prisma.aviso.findFirst({
			where: { id: avisoId, gestorRhUsuarioId: usuarioId },
			include: {
				avisoUsuario: true,
			},
		});

		if (!aviso) throw new NotFoundException('Aviso não encontrado ou acesso não autorizado');

		await this.prisma.aviso.update({
			where: { id: avisoId, gestorRhUsuarioId: usuarioId },
			data: {
				assunto: dto.assunto,
				conteudo: dto.conteudo,
			},
		});

		// Atualiza usuarios
		if (dto.avisoUsuario) {
			const usuariosValidos = await this.prisma.usuario.findMany({
				where: {
					id: { in: dto.avisoUsuario },
				},
				select: { id: true },
			});

			const novosUsuarios = usuariosValidos.map((u) => u.id);

			const usuariosAtuais = await this.prisma.avisoUsuario.findMany({
				where: { avisoId: avisoId },
				select: { usuarioId: true },
			});

			const idsAtuais = usuariosAtuais.map((u) => u.usuarioId);

			const remover = idsAtuais.filter((id) => !novosUsuarios.includes(id));
			const adicionar = novosUsuarios.filter((id) => !idsAtuais.includes(id));

			if (remover.length) {
				await this.prisma.avisoUsuario.deleteMany({
					where: {
						avisoId: avisoId,
						usuarioId: { in: remover },
					},
				});
			}

			if (adicionar.length) {
				await this.prisma.avisoUsuario.createMany({
					data: adicionar.map((usuarioId) => ({ usuarioId, avisoId: avisoId })),
					skipDuplicates: true,
				});
			}
		}

		return this.prisma.aviso.findFirst({ where: { id: avisoId } });
	}

	async remove(avisoId: number, usuarioId: number) {
		const aviso = await this.prisma.aviso.findFirst({
			where: { id: avisoId, gestorRhUsuarioId: usuarioId },
			include: {
				avisoUsuario: true,
			},
		});

		if (!aviso) throw new NotFoundException('Aviso não encontrado ou acesso não autorizado');

		return this.prisma.aviso.delete({ where: { id: avisoId, gestorRhUsuarioId: usuarioId } });
	}
}
