import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Patch,
	Post,
	Query,
	Req,
	UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FuncaoUsuario } from 'generated/prisma';
import { Role } from 'src/common/decorators/role.decorator';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { DemandaService } from './demanda.service';
import { CreateDemandaDto } from './dto/create-demanda.dto';
import { FilterDemandasDto } from './dto/filter-demanda.dto';
import { UpdateDemandaDto } from './dto/update-demanda.dto';
import { DemandaEntity } from './entitities/demanda.entity';

@ApiTags('demanda')
@ApiBearerAuth('access-token')
@Controller('demanda')
export class DemandaController {
	constructor(private demandaService: DemandaService) {}

	@Post()
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Role(FuncaoUsuario.GESTOR)
	@ApiResponse({ status: 201, type: DemandaEntity })
	create(@Body() createDemandaDto: CreateDemandaDto, @Req() req: RequestWithUser) {
		const gestorId = req.user['id'];
		return this.demandaService.create(createDemandaDto, gestorId);
	}

	@Get()
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiResponse({ status: 200, type: [DemandaEntity] })
	findAll(@Query() filterDemandasDto: FilterDemandasDto, @Req() req: RequestWithUser) {
		const usuarioId = req.user['id'];
		return this.demandaService.findAll(usuarioId, filterDemandasDto);
	}

	@Get('/grupo/:id')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiResponse({ status: 200, type: DemandaEntity })
	findAllByGroup(
		@Query() filterDemandasDto: FilterDemandasDto,
		@Param('id', ParseIntPipe) groupId: number,
	) {
		return this.demandaService.findAllByGroup(groupId, filterDemandasDto);
	}

	@Get(':id')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiResponse({ status: 200, type: DemandaEntity })
	findOne(@Param('id', ParseIntPipe) id: number) {
		return this.demandaService.findOne(id);
	}

	@Patch(':id')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Role(FuncaoUsuario.GESTOR)
	@ApiResponse({ status: 200, type: DemandaEntity })
	update(
		@Param('id', ParseIntPipe) id: number,
		@Body() updateDemandaDto: UpdateDemandaDto,
		@Req() req: RequestWithUser,
	) {
		const gestorId = req.user['id'];
		return this.demandaService.update(id, updateDemandaDto, gestorId);
	}

	@Delete(':id')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Role(FuncaoUsuario.GESTOR)
	@ApiResponse({ status: 204 })
	delete(@Param('id', ParseIntPipe) id: number, @Req() req: RequestWithUser) {
		const gestorId = req.user['id'];
		return this.demandaService.remove(id, gestorId);
	}
}
