import { Module } from '@nestjs/common';
import { PrestacaoContasController } from './prestacao-contas.controller';

@Module({
  controllers: [PrestacaoContasController]
})
export class PrestacaoContasModule {}
