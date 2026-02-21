import { TokenService } from '../token/token.service';
import { UserService } from '../user/user.service';
import { FastifyReply } from 'fastify';
import { SigninDto, SignupDto } from './dto/auth.dto';
export declare class AuthService {
    private readonly userService;
    private readonly tokenService;
    constructor(userService: UserService, tokenService: TokenService);
    register(dto: SignupDto, res: FastifyReply): Promise<import("@cosmetic-services/types").IStandartResponse>;
    login(dto: SigninDto, res: FastifyReply): Promise<import("@cosmetic-services/types").IStandartResponse>;
    logout(userId: string): Promise<void>;
    validateUser(email: string, password: string): Promise<void>;
}
