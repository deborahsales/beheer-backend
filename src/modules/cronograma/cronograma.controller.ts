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
import { CronogramaService } from './cronograma.service';
import { CreateCronogramaDto } from './dto/create-cronograma.dto';
import { UpdateCronogramaDto } from './dto/update-cronograma.dto';
import { CronogramaEntity } from './entities/cronograma.entity';

@ApiTags('cronograma')
@ApiBearerAuth('access-token')
@Controller('cronograma')
export class CronogramaController {
	constructor(private cronogramaService: CronogramaService) {}

	@Post()
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Role(FuncaoUsuario.GESTOR)
	@ApiResponse({ status: 201, type: CronogramaEntity })
	create(@Body() createCronogramaDto: CreateCronogramaDto, @Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		return this.cronogramaService.create(createCronogramaDto, usuarioId);
	}

	@Get()
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Role(FuncaoUsuario.GESTOR)
	@ApiResponse({ status: 200, type: [CronogramaEntity] })
	findAll(@Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		return this.cronogramaService.findAll(usuarioId);
	}

	@Get(':id')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Role(FuncaoUsuario.GESTOR)
	@ApiResponse({ status: 200, type: CronogramaEntity })
	findOne(@Param('id', ParseIntPipe) cronogramaId: number, @Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		return this.cronogramaService.findOne(cronogramaId, usuarioId);
	}

	@Patch(':id')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Role(FuncaoUsuario.GESTOR)
	@ApiResponse({ status: 200, type: CronogramaEntity })
	update(
		@Param('id', ParseIntPipe) cronogramaId: number,
		@Body() updateCronogramaDto: UpdateCronogramaDto,
		@Req() req: RequestWithUser,
	) {
		const usuarioId = req.user['id'];
		return this.cronogramaService.update(updateCronogramaDto, cronogramaId, usuarioId);
	}

	@Delete(':id')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Role(FuncaoUsuario.GESTOR)
	@ApiResponse({ status: 204 })
	delete(@Param('id', ParseIntPipe) cronogramaId: number, @Req() req: RequestWithUser) {
		const gestorId = req.user['id'];
		return this.cronogramaService.remove(cronogramaId, gestorId);
	}
}
