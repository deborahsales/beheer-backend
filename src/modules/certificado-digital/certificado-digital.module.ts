import { Module } from '@nestjs/common';
import { CertificadoDigitalController } from './certificado-digital.controller';
import { CertificadoDigitalService } from './certificado-digital.service';

@Module({
  controllers: [CertificadoDigitalController],
  providers: [CertificadoDigitalService]
})
export class CertificadoDigitalModule {}
