import { CreatePontoDto } from './create-ponto.dto';
declare const UpdatePontoDto_base: import("@nestjs/common").Type<Partial<Omit<CreatePontoDto, "imagem" | "latitude" | "longitude">>>;
export declare class UpdatePontoDto extends UpdatePontoDto_base {
    dateTimestamp: Date;
}
export {};
