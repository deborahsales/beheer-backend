import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateGrupoDto } from './create-grupo.dto';

export class UpdateGrupoDto extends PartialType(OmitType(CreateGrupoDto, ['usuarios'] as const)) {}
