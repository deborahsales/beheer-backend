import {
	Body,
	Controller,
	Delete,
	ForbiddenException,
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
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioEntity } from './entities/usuario.entity';
import { UsuarioService } from './usuario.service';

@ApiTags('usuario')
@ApiBearerAuth('access-token')
@Controller('usuario')
export class UsuarioController {
	constructor(private readonly usuarioService: UsuarioService) {}

	@Post()
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Role(FuncaoUsuario.ADMINISTRADOR)
	@ApiResponse({ status: 201, type: UsuarioEntity })
	create(@Body() createUsuarioDto: CreateUsuarioDto) {
		return this.usuarioService.create(createUsuarioDto);
	}

	@Get()
	@UseGuards(JwtAuthGuard)
	@ApiResponse({ status: 200, type: [UsuarioEntity] })
	findAll() {
		return this.usuarioService.findAll();
	}

	@Get(':id')
	@UseGuards(JwtAuthGuard)
	@ApiResponse({ status: 200, type: [UsuarioEntity] })
	findOne(@Param('id', ParseIntPipe) id: number) {
		return this.usuarioService.findOne(id);
	}

	@Patch(':id')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Role(FuncaoUsuario.ADMINISTRADOR)
	@ApiResponse({ status: 200, type: UsuarioEntity })
	update(@Param('id', ParseIntPipe) id: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
		return this.usuarioService.update(id, updateUsuarioDto);
	}

	@Delete(':id')
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Role(FuncaoUsuario.ADMINISTRADOR)
	@ApiResponse({ status: 204 })
	remove(@Param('id', ParseIntPipe) id: number, @Req() req: RequestWithUser) {
		const userId = req.user['id'];

		if (id === userId) {
			throw new ForbiddenException('Você não pode deletar a si mesmo.');
		}

		return this.usuarioService.remove(id);
	}
}
