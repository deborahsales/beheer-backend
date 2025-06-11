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
import { CreatePontoDto } from './dto/create-ponto.dto';
import { UpdatePontoDto } from './dto/update-ponto.dto';
import { PontoEntity } from './entities/ponto.entity';
import { PontoService } from './ponto.service';

@ApiTags('ponto')
@ApiBearerAuth('access-token')
@Controller('ponto')
export class PontoController {
	constructor(private pontoService: PontoService) {}

	@Post()
	@UseGuards(JwtAuthGuard)
	@ApiResponse({ status: 201, type: PontoEntity })
	create(@Body() createPontoDto: CreatePontoDto, @Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		const ip = req.ip || '';

		return this.pontoService.create(createPontoDto, usuarioId, ip);
	}

	@Get()
	@UseGuards(JwtAuthGuard)
	@ApiResponse({ status: 200, type: [PontoEntity] })
	findAll(@Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		const funcaoUsuario = req.user['funcao'];
		return this.pontoService.findAll(funcaoUsuario, usuarioId);
	}

	@Get(':id')
	@UseGuards(JwtAuthGuard)
	@ApiResponse({ status: 200, type: PontoEntity })
	findOne(@Param('id', ParseIntPipe) id: number, @Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		const funcaoUsuario = req.user['funcao'];
		return this.pontoService.findOne(id, funcaoUsuario, usuarioId);
	}

	@Patch(':id')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Role(FuncaoUsuario.RH)
	@ApiResponse({ status: 200, type: PontoEntity })
	update(@Param('id', ParseIntPipe) id: number, @Body() updatePontoDto: UpdatePontoDto) {
		return this.pontoService.update(updatePontoDto, id);
	}

	@Delete(':id')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Role(FuncaoUsuario.RH)
	@ApiResponse({ status: 204 })
	delete(@Param('id', ParseIntPipe) id: number) {
		return this.pontoService.remove(id);
	}
}
