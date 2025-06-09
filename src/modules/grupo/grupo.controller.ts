import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Patch,
	Post,
	Req,
	UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FuncaoUsuario } from 'generated/prisma';
import { Role } from 'src/common/decorators/role.decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { GrupoEntity } from './entities/grupo.entity';
import { GrupoService } from './grupo.service';

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
	findOne(@Param('id', ParseIntPipe) id: number) {
		return this.grupoService.findOne(id);
	}

	@Patch(':id')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Role(FuncaoUsuario.GESTOR)
	@ApiResponse({ status: 200, type: GrupoEntity })
	update(
		@Param('id', ParseIntPipe) id: number,
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
	delete(@Param('id', ParseIntPipe) id: number, @Req() req: RequestWithUser) {
		const gestorId = req.user['id'];
		return this.grupoService.remove(id, gestorId);
	}
}
