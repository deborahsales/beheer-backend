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
import { AtestadoService } from './atestado.service';
import { CreateAtestadoDto } from './dto/create-atestado.dto';
import { UpdateAtestadoDto } from './dto/update-atestado.dto';
import { UpdateGerenciamentoAtestadoDto } from './dto/update-gerenciamento-atestado';
import { AtestadoEntity } from './entities/atestado.entity.dto';

@ApiTags('atestado')
@ApiBearerAuth('access-token')
@Controller('atestado')
export class AtestadoController {
	constructor(private atestadoService: AtestadoService) {}

	@Post()
	@UseGuards(JwtAuthGuard)
	@ApiResponse({ status: 201, type: AtestadoEntity })
	create(@Body() createAtestadoDto: CreateAtestadoDto, @Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		return this.atestadoService.create(createAtestadoDto, usuarioId);
	}

	@Get()
	@UseGuards(JwtAuthGuard)
	@ApiResponse({ status: 200, type: [AtestadoEntity] })
	findAll(@Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		const funcaoUsuario = req.user['funcao'];
		return this.atestadoService.findAll(funcaoUsuario, usuarioId);
	}

	@Get(':id')
	@UseGuards(JwtAuthGuard)
	@ApiResponse({ status: 200, type: AtestadoEntity })
	findOne(@Param('id', ParseIntPipe) id: number, @Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		const funcaoUsuario = req.user['funcao'];
		return this.atestadoService.findOne(id, funcaoUsuario, usuarioId);
	}

	@Patch(':id')
	@UseGuards(JwtAuthGuard)
	@ApiResponse({ status: 200, type: AtestadoEntity })
	update(
		@Param('id', ParseIntPipe) id: number,
		@Body() updateAtestadoDto: UpdateAtestadoDto,
		@Req() req: RequestWithUser,
	) {
		const usuarioId = req.user['id'];
		return this.atestadoService.update(updateAtestadoDto, id, usuarioId);
	}

	@Patch('/gerenciamento/:id')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Role(FuncaoUsuario.RH)
	@ApiResponse({ status: 200, type: AtestadoEntity })
	updateRh(
		@Param('id', ParseIntPipe) id: number,
		@Body() UpdateAtestadoDto: UpdateGerenciamentoAtestadoDto,
		@Req() req: RequestWithUser,
	) {
		const usuarioId = req.user['id'];
		return this.atestadoService.updateRh(UpdateAtestadoDto, id, usuarioId);
	}

	@Delete(':id')
	@UseGuards(JwtAuthGuard)
	@ApiResponse({ status: 204 })
	delete(@Param('id', ParseIntPipe) id: number, @Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		return this.atestadoService.remove(id, usuarioId);
	}
}
