import { Module } from '@nestjs/common';
import { AjustePontoController } from './ajuste-ponto.controller';

@Module({
  controllers: [AjustePontoController]
})
export class AjustePontoModule {}
