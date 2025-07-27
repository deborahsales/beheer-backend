import { PartialType } from '@nestjs/swagger';
import { CreatePrestacaoContasDto } from './create-prestacao-contas.dto';

export class UpdatePrestacaoContasDto extends PartialType(CreatePrestacaoContasDto) {}
