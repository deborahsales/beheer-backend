import { Module } from '@nestjs/common';
import { CertificadoDigitalController } from './certificado-digital.controller';

@Module({
  controllers: [CertificadoDigitalController]
})
export class CertificadoDigitalModule {}
