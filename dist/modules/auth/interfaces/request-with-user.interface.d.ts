import { Request } from 'express';
export interface RequestWithUser extends Request {
    user: {
        id: number;
        email: string;
        funcao: string;
        nome: string;
    };
}
