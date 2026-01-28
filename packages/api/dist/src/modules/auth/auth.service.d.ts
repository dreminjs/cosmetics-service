import { TokenService } from '../token/token.service';
import { UserService } from '../user/user.service';
import { AuthDto } from './dto/auth.dto';
import { FastifyReply } from 'fastify';
export declare class AuthService {
    private readonly userService;
    private readonly tokenService;
    constructor(userService: UserService, tokenService: TokenService);
    register(dto: AuthDto, res: FastifyReply): Promise<import("@cosmetic-services/types").IStandartResponse>;
    login(dto: AuthDto, res: FastifyReply): Promise<import("@cosmetic-services/types").IStandartResponse>;
    logout(userId: string): Promise<void>;
    validateUser(email: string, password: string): Promise<void>;
}
