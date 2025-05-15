import { Module } from '@nestjs/common';
import { PrestacaoContasController } from './prestacao-contas.controller';
import { PrestacaoContasService } from './prestacao-contas.service';

@Module({
  controllers: [PrestacaoContasController],
  providers: [PrestacaoContasService]
})
export class PrestacaoContasModule {}
