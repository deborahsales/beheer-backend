import { Module } from '@nestjs/common';
import { AtestadoController } from './atestado.controller';
import { AtestadoService } from './atestado.service';

@Module({
  controllers: [AtestadoController],
  providers: [AtestadoService]
})
export class AtestadoModule {}
