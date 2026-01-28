import { TokenService } from './token.service';
import { IStandartResponse } from '@cosmetic-services/types';
import { FastifyReply } from 'fastify';
export declare class TokenController {
    private readonly tokenService;
    constructor(tokenService: TokenService);
    index(userId: string, res: FastifyReply): Promise<IStandartResponse>;
}
