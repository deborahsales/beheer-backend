import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateComentarioDto } from './create-comentario.dto';

export class UpdateComentarioDto extends PartialType(CreateComentarioDto) {}
