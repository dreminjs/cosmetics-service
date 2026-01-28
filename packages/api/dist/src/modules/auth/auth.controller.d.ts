import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { IStandartResponse } from '@cosmetic-services/types';
import { FastifyReply } from 'fastify';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: AuthDto, response: FastifyReply): Promise<IStandartResponse>;
    login(dto: AuthDto, response: FastifyReply): Promise<IStandartResponse>;
    logout(userId: string): Promise<void>;
}
