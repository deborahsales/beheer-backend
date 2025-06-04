import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { FuncaoUsuario } from 'generated/prisma';
import { PrismaService } from '../prisma/prisma.service';
import { userSelect } from '../usuario/types/user-select.type';
import { AddUsuarioDto } from './dto/add-usuario.dto';
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

	async addGestor(dto: AddUsuarioDto) {
		const usuario = await this.prisma.usuario.findUnique({
			where: { id: dto.usuarioId },
		});

		if (!usuario) {
			throw new BadRequestException('Usuário não encontrado');
		}

		if (usuario.funcao !== FuncaoUsuario.GESTOR) {
			throw new BadRequestException('Usuário não possui permissão de gestor');
		}

		await this.prisma.grupoGestor.create({
			data: dto,
		});

		const grupo = await this.findOne(dto.grupoId);

		return grupo;
	}

	async addUsuario(dto: AddUsuarioDto) {
		const usuario = await this.prisma.usuario.findUnique({
			where: { id: dto.usuarioId },
		});

		if (!usuario) {
			throw new BadRequestException('Usuário não encontrado');
		}

		if (usuario.funcao !== FuncaoUsuario.COLABORADOR) {
			throw new BadRequestException('Usuário não possui permissão de gestor');
		}

		await this.prisma.usuarioGrupo.create({
			data: dto,
		});

		const grupo = await this.findOne(dto.grupoId);

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
		const data: any = { ...dto };

		const grupo = await this.findOne(id, gestorId);
		if (!grupo) throw new NotFoundException('Grupo não encontrado ou acesso não autorizado');

		const updated = await this.prisma.grupo.update({
			where: { id: Number(id) },
			data: {
				nome: dto.nome,
				descricao: dto.descricao,
			},
		});
		return updated;
	}

	async remove(id: number, gestorId: number) {
		const grupo = await this.findOne(id, gestorId);
		if (!grupo) throw new NotFoundException('Grupo não encontrado ou acesso não autorizado');
		await this.prisma.grupo.delete({ where: { id: Number(id) } });
	}
}
