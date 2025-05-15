import { Module } from '@nestjs/common';
import { AtestadoController } from './atestado.controller';

@Module({
  controllers: [AtestadoController]
})
export class AtestadoModule {}
