import { ConfigService } from '@nestjs/config';
import { UserService } from '../../user/user.service';
import { ITokenPayload } from '../token.interface';
import { User } from 'generated/prisma/client';
declare const RefreshTokenStrategy_base: new (...args: any) => any;
export declare class RefreshTokenStrategy extends RefreshTokenStrategy_base {
    private readonly configService;
    private readonly userService;
    constructor(configService: ConfigService, userService: UserService);
    validate({ userId }: ITokenPayload): Promise<User | null>;
}
export {};
