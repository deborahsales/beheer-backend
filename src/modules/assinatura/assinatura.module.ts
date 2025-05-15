import { Module } from '@nestjs/common';
import { AssinaturaController } from './assinatura.controller';

@Module({
  controllers: [AssinaturaController]
})
export class AssinaturaModule {}
