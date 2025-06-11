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
import { CreatePrestacaoContasDto } from './dto/create-prstacao-contas.dto';
import { UpdateGerenciamentoPrestacaoDto } from './dto/update-gerenciamento-prestacao.dto';
import { UpdatePrestacaoContasDto } from './dto/update-prestacao-contas.dto';
import { PrestacaoContasEntity } from './entities/prestacao-contas.entity';
import { PrestacaoContasService } from './prestacao-contas.service';

@ApiTags('prestacao-contas')
@ApiBearerAuth('access-token')
@Controller('prestacao-contas')
export class PrestacaoContasController {
	constructor(private prestacaoContasService: PrestacaoContasService) {}

	@Post()
	@UseGuards(JwtAuthGuard)
	@ApiResponse({ status: 201, type: PrestacaoContasEntity })
	create(@Body() createPrestacaoContasDto: CreatePrestacaoContasDto, @Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		return this.prestacaoContasService.create(createPrestacaoContasDto, usuarioId);
	}

	@Get()
	@UseGuards(JwtAuthGuard)
	@ApiResponse({ status: 200, type: [PrestacaoContasEntity] })
	findAll(@Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		const funcaoUsuario = req.user['funcao'];
		return this.prestacaoContasService.findAll(funcaoUsuario, usuarioId);
	}

	@Get(':id')
	@UseGuards(JwtAuthGuard)
	@ApiResponse({ status: 200, type: PrestacaoContasEntity })
	findOne(@Param('id', ParseIntPipe) id: number, @Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		const funcaoUsuario = req.user['funcao'];
		return this.prestacaoContasService.findOne(id, funcaoUsuario, usuarioId);
	}

	@Patch(':id')
	@UseGuards(JwtAuthGuard)
	@ApiResponse({ status: 200, type: PrestacaoContasEntity })
	update(
		@Param('id', ParseIntPipe) id: number,
		@Body() updatePrestacaoDto: UpdatePrestacaoContasDto,
		@Req() req: RequestWithUser,
	) {
		const usuarioId = req.user['id'];
		return this.prestacaoContasService.update(updatePrestacaoDto, id, usuarioId);
	}

	@Patch('/gerenciamento/:id')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Role(FuncaoUsuario.RH)
	@ApiResponse({ status: 200, type: PrestacaoContasEntity })
	updateRh(
		@Param('id', ParseIntPipe) id: number,
		@Body() UpdatePrestacaoDto: UpdateGerenciamentoPrestacaoDto,
		@Req() req: RequestWithUser,
	) {
		const usuarioId = req.user['id'];
		return this.prestacaoContasService.updateRh(UpdatePrestacaoDto, id, usuarioId);
	}

	@Delete(':id')
	@UseGuards(JwtAuthGuard)
	@ApiResponse({ status: 204 })
	delete(@Param('id', ParseIntPipe) id: number, @Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		return this.prestacaoContasService.remove(id, usuarioId);
	}
}
