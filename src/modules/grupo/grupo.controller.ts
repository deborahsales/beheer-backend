import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GrupoService } from './grupo.service';
import { Role } from 'src/common/decorators/role.decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { FuncaoUsuario } from 'generated/prisma';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { GrupoEntity } from './entities/grupo.entity';
import { AddUsuarioDto } from './dto/add-usuario.dto';
import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { UpdateGrupoDto } from './dto/update-grupo.dto';

@ApiTags('grupo')
@ApiBearerAuth('access-token')
@Controller('grupo')
export class GrupoController {
	constructor(private readonly grupoService: GrupoService) {}

	@Post()
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Role(FuncaoUsuario.GESTOR)
	@ApiResponse({ status: 201, type: GrupoEntity })
	create(@Body() createGrupoDto: CreateGrupoDto, @Req() req: RequestWithUser) {
		const gestorId = req.user['id'];
		return this.grupoService.create(createGrupoDto, gestorId);
	}

	@Post('/gestor')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Role(FuncaoUsuario.GESTOR)
	@ApiResponse({ status: 201, type: GrupoEntity })
	addGestor(@Body() addUsuarioDto: AddUsuarioDto) {
		return this.grupoService.addGestor(addUsuarioDto);
	}

	@Post('/usuario')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Role(FuncaoUsuario.GESTOR)
	@ApiResponse({ status: 201, type: GrupoEntity })
	addUsuario(@Body() addUsuarioDto: AddUsuarioDto) {
		return this.grupoService.addUsuario(addUsuarioDto);
	}

	@Get()
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiResponse({ status: 200, type: [GrupoEntity] })
	findAll(@Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		return this.grupoService.findAll(usuarioId);
	}

	@Get(':id')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiResponse({ status: 200, type: GrupoEntity })
	findOne(@Param('id') id: number) {
		return this.grupoService.findOne(Number(id));
	}

	@Patch(':id')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Role(FuncaoUsuario.GESTOR)
	@ApiResponse({ status: 200, type: GrupoEntity })
	update(
		@Param('id') id: number,
		@Body() updateGrupoDto: UpdateGrupoDto,
		@Req() req: RequestWithUser,
	) {
		const gestorId = req.user['id'];
		return this.grupoService.update(id, updateGrupoDto, gestorId);
	}

	@Delete(':id')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Role(FuncaoUsuario.GESTOR)
	@ApiResponse({ status: 204 })
	delete(@Param('id') id: number, @Req() req: RequestWithUser) {
		const gestorId = req.user['id'];
		return this.grupoService.remove(id, gestorId);
	}
}
