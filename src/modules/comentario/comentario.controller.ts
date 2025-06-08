import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FuncaoUsuario } from 'generated/prisma';
import { Role } from 'src/common/decorators/role.decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { ComentarioService } from './comentario.service';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';
import { ComentarioEntity } from './entities/comentario.entity';

@ApiTags('comentario')
@ApiBearerAuth('access-token')
@Controller('comentario')
export class ComentarioController {
	constructor(private comentarioService: ComentarioService) {}

	@Post()
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Role(FuncaoUsuario.GESTOR, FuncaoUsuario.COLABORADOR)
	@ApiResponse({ status: 201, type: ComentarioEntity })
	create(@Body() createComentarioDto: CreateComentarioDto, @Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		return this.comentarioService.create(createComentarioDto, usuarioId);
	}

	@Get('/demanda/:id')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiResponse({ status: 200, type: ComentarioEntity })
	findAll(@Param('id') demandaId: number, @Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		return this.comentarioService.findAll(Number(demandaId), usuarioId);
	}

	@Get(':id')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiResponse({ status: 200, type: ComentarioEntity })
	findOne(@Param('id') comentarioId: number) {
		return this.comentarioService.findOne(Number(comentarioId));
	}

	@Patch(':id')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiResponse({ status: 200, type: ComentarioEntity })
	update(
		@Param('id') comentarioId: number,
		@Body() updateComentarioDto: UpdateComentarioDto,
		@Req() req: RequestWithUser,
	) {
		const usuarioId = req.user['id'];
		return this.comentarioService.update(updateComentarioDto, comentarioId, usuarioId);
	}

	@Delete(':id')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiResponse({ status: 204 })
	delete(@Param('id') comentarioId: number, @Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		return this.comentarioService.remove(comentarioId, usuarioId);
	}
}
