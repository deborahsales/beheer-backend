import { Module } from '@nestjs/common';
import { DemandaController } from './demanda.controller';

@Module({
  controllers: [DemandaController]
})
export class DemandaModule {}
