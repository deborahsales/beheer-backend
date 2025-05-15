import { Module } from '@nestjs/common';
import { GrupoController } from './grupo.controller';

@Module({
  controllers: [GrupoController]
})
export class GrupoModule {}
