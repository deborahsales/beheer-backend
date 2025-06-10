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
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { AjustePontoService } from './ajuste-ponto.service';
import { CreateAjustePontoDto } from './dto/create-ajuste-ponto.dto';
import { AjustePontoEntity } from './entities/ajuste-ponto.entity';
import { UpdateAjustePontoDto } from './dto/update-ajuste-ponto.dto';

@ApiTags('ajuste-ponto')
@ApiBearerAuth('access-token')
@Controller('ajuste-ponto')
export class AjustePontoController {
	constructor(private ajustePontoService: AjustePontoService) {}

	@Post(':id')
	@UseGuards(JwtAuthGuard)
	@ApiResponse({ status: 201, type: AjustePontoEntity })
	create(
		@Param('id', ParseIntPipe) pontoId: number,
		@Body() createAjustePontoDto: CreateAjustePontoDto,
		@Req() req: RequestWithUser,
	) {
		const usuarioId = req.user['id'];

		return this.ajustePontoService.create(createAjustePontoDto, pontoId, usuarioId);
	}

	@Get()
	@UseGuards(JwtAuthGuard)
	@ApiResponse({ status: 200, type: [AjustePontoEntity] })
	findAll(@Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		const funcaoUsuario = req.user['funcao'];
		return this.ajustePontoService.findAll(funcaoUsuario, usuarioId);
	}

	@Get(':id')
	@UseGuards(JwtAuthGuard)
	@ApiResponse({ status: 200, type: AjustePontoEntity })
	findOne(@Param('id', ParseIntPipe) id: number, @Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		const funcaoUsuario = req.user['funcao'];
		return this.ajustePontoService.findOne(id, funcaoUsuario, usuarioId);
	}

	@Patch(':id')
	@UseGuards(JwtAuthGuard)
	@ApiResponse({ status: 200, type: AjustePontoEntity })
	update(
		@Param('id', ParseIntPipe) id: number,
		@Body() updateAjustePontoDto: UpdateAjustePontoDto,
		@Req() req: RequestWithUser,
	) {
		const usuarioId = req.user['id'];
		return this.ajustePontoService.update(updateAjustePontoDto, id, usuarioId);
	}

	@Delete(':id')
	@UseGuards(JwtAuthGuard)
	@ApiResponse({ status: 204 })
	delete(@Param('id', ParseIntPipe) id: number, @Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		return this.ajustePontoService.remove(id, usuarioId);
	}
}
