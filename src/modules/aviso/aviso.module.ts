import { Module } from '@nestjs/common';
import { AvisoController } from './aviso.controller';

@Module({
  controllers: [AvisoController]
})
export class AvisoModule {}
