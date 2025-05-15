import { Module } from '@nestjs/common';
import { LocalizacaoController } from './localizacao.controller';
import { LocalizacaoService } from './localizacao.service';

@Module({
  controllers: [LocalizacaoController],
  providers: [LocalizacaoService]
})
export class LocalizacaoModule {}
