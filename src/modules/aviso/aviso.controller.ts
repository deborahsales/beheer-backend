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
import { AvisoService } from './aviso.service';
import { CreateAvisoDto } from './dto/create-aviso.dto';
import { UpdateAvisoDto } from './dto/update-aviso.dto';
import { AvisoEntity } from './entities/aviso.entity';

@ApiTags('aviso')
@ApiBearerAuth('access-token')
@Controller('aviso')
export class AvisoController {
	constructor(private avisoService: AvisoService) {}

	@Post()
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Role(FuncaoUsuario.GESTOR, FuncaoUsuario.RH, FuncaoUsuario.ADMINISTRADOR)
	@ApiResponse({ status: 201, type: AvisoEntity })
	create(@Body() createAvisoDto: CreateAvisoDto, @Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		return this.avisoService.create(createAvisoDto, usuarioId);
	}

	@Get()
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiResponse({ status: 200, type: [AvisoEntity] })
	findAll(@Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		return this.avisoService.findAll(usuarioId);
	}

	@Get(':id')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiResponse({ status: 200, type: AvisoEntity })
	findOne(@Param('id', ParseIntPipe) avisoId: number, @Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		return this.avisoService.findOne(avisoId, usuarioId);
	}

	@Patch('/lido/:id')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiResponse({ status: 200, type: AvisoEntity })
	updateLido(@Param('id', ParseIntPipe) avisoId: number, @Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		return this.avisoService.updateLido(avisoId, usuarioId);
	}

	@Patch(':id')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Role(FuncaoUsuario.GESTOR, FuncaoUsuario.RH, FuncaoUsuario.ADMINISTRADOR)
	@ApiResponse({ status: 200, type: AvisoEntity })
	update(
		@Param('id', ParseIntPipe) avisoId: number,
		@Body() updateAvisoDto: UpdateAvisoDto,
		@Req() req: RequestWithUser,
	) {
		const gestorId = req.user['id'];
		return this.avisoService.update(updateAvisoDto, avisoId, gestorId);
	}

	@Delete(':id')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Role(FuncaoUsuario.GESTOR, FuncaoUsuario.RH, FuncaoUsuario.ADMINISTRADOR)
	@ApiResponse({ status: 204 })
	delete(@Param('id', ParseIntPipe) avisoId: number, @Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		return this.avisoService.remove(avisoId, usuarioId);
	}
}
