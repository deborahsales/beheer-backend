import { SetMetadata } from '@nestjs/common';
import { FuncaoUsuario } from 'generated/prisma';

export const Role = (...roles: FuncaoUsuario[]) => SetMetadata('roles', roles);
