import { PartialType } from '@nestjs/swagger';
import { CreateAtestadoDto } from './create-atestado.dto';

export class UpdateAtestadoDto extends PartialType(CreateAtestadoDto) {}
