import { CreateDemandaDto } from './create-demanda.dto';
declare const UpdateDemandaDto_base: import("@nestjs/common").Type<Partial<CreateDemandaDto>>;
export declare class UpdateDemandaDto extends UpdateDemandaDto_base {
    usuariosDemanda?: number[];
    gruposDemanda?: number[];
}
export {};
