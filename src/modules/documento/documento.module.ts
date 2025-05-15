import { Module } from '@nestjs/common';
import { DocumentoController } from './documento.controller';

@Module({
  controllers: [DocumentoController]
})
export class DocumentoModule {}
