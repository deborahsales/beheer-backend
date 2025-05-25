import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsuarioService } from './usuario.service';
import { UsuarioEntity } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@ApiTags('usuario')
@Controller('usuario')
export class UsuarioController {
	constructor(private readonly usuarioService: UsuarioService) {}

	@Post()
	@ApiResponse({ status: 201, type: UsuarioEntity })
	create(@Body() createUsuarioDto: CreateUsuarioDto) {
		return this.usuarioService.create(createUsuarioDto);
	}

	@Get()
	@ApiResponse({ status: 200, type: [UsuarioEntity] })
	findAll() {
		return this.usuarioService.findAll();
	}

	@Get(':id')
	@ApiResponse({ status: 200, type: [UsuarioEntity] })
	findOne(@Param('id') id: number) {
		return this.usuarioService.findOne(id);
	}

	@Patch(':id')
	@ApiResponse({ status: 200, type: UsuarioEntity })
	update(@Param('id') id: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
		return this.usuarioService.update(id, updateUsuarioDto);
	}

	@Delete(':id')
	@ApiResponse({ status: 204 })
	remove(@Param('id') id: number) {
		return this.usuarioService.remove(id);
	}
}
