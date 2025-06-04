import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
	constructor(private prisma: PrismaService) {}

	async create(dto: CreateUsuarioDto) {
		const hashedPassword = await bcrypt.hash(dto.senha, 10);

		const usuario = await this.prisma.usuario.create({
			data: {
				...dto,
				senha: hashedPassword,
			},
		});

		const { senha, ...result } = usuario;
		return result;
	}

	findAll() {
		return this.prisma.usuario.findMany({
			select: {
				id: true,
				cpf: true,
				nome: true,
				email: true,
				telefone: true,
				dataNascimento: true,
				dataAdmissao: true,
				dataDesligamento: true,
				cargo: true,
				funcao: true,
			},
		});
	}

	async findOne(id: number) {
		const usuario = await this.prisma.usuario.findUnique({ where: { id: Number(id) } });
		if (!usuario) throw new NotFoundException('Usuário não encontrado');
		const { senha, ...result } = usuario;
		return result;
	}

	async findByEmail(email: string) {
		const usuario = await this.prisma.usuario.findUnique({ where: { email } });
		if (!usuario) throw new NotFoundException('Usuário não encontrado');
		return usuario;
	}

	async update(id: number, dto: UpdateUsuarioDto) {
		const data: any = { ...dto };

		if (dto.senha) {
			data.senha = await bcrypt.hash(dto.senha, 10);
		}

		const updated = await this.prisma.usuario.update({ where: { id: Number(id) }, data });
		const { senha, ...result } = updated;
		return result;
	}

	async remove(id: number) {
		const usuario = await this.findOne(Number(id));
		if (!usuario) throw new NotFoundException('Usuário não encontrado ou acesso não autorizado');
		await this.prisma.usuario.delete({ where: { id: Number(id) } });
	}
}
