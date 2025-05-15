import { Module } from '@nestjs/common';
import { LocalizacaoController } from './localizacao.controller';

@Module({
  controllers: [LocalizacaoController]
})
export class LocalizacaoModule {}
