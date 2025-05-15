import { Module } from '@nestjs/common';
import { PontoController } from './ponto.controller';

@Module({
  controllers: [PontoController]
})
export class PontoModule {}
