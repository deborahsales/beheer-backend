import { Module } from '@nestjs/common';
import { AjustePontoController } from './ajuste-ponto.controller';
import { AjustePontoService } from './ajuste-ponto.service';

@Module({
  controllers: [AjustePontoController],
  providers: [AjustePontoService]
})
export class AjustePontoModule {}
