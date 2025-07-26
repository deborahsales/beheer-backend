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
	UploadedFile,
	UseGuards,
	UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FuncaoUsuario } from 'generated/prisma';
import { diskStorage } from 'multer';
import { extname } from 'path';
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
	@UseInterceptors(
		FileInterceptor('imagem', {
			storage: diskStorage({
				destination: './uploads/prestacoes',
				filename: (req, file, cb) => {
					const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
					cb(null, uniqueSuffix + extname(file.originalname));
				},
			}),
			limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
		}),
	)
	@ApiConsumes('multipart/form-data')
	@ApiBody({
		schema: {
			type: 'object',
			properties: {
				descricao: { type: 'string' },
				data: { type: 'string', format: 'date-time' },
				valor: { type: 'number' },
				imagem: { type: 'string', format: 'binary' },
			},
		},
	})
	@ApiResponse({ status: 201, type: PrestacaoContasEntity })
	create(
		@Body() dto: CreatePrestacaoContasDto,
		@UploadedFile() imagem: Express.Multer.File,
		@Req() req: RequestWithUser,
	) {
		const usuarioId = req.user['id'];

		return this.prestacaoContasService.create(
			{
				...dto,
				imagem: imagem.filename,
			},
			usuarioId,
		);
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
