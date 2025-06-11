import { PartialType } from '@nestjs/swagger';
import { CreatePrestacaoContasDto } from './create-prstacao-contas.dto';

export class UpdatePrestacaoContasDto extends PartialType(CreatePrestacaoContasDto) {}
