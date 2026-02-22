import { ConfigService } from '@nestjs/config';
import { UserService } from '../../user/user.service';
import { ITokenPayload } from '../token.interface';
import { TPrivateUser } from '@cosmetic-services/types';
declare const AccessTokenStrategy_base: new (...args: any) => any;
export declare class AccessTokenStrategy extends AccessTokenStrategy_base {
    private readonly configService;
    private readonly userService;
    constructor(configService: ConfigService, userService: UserService);
    validate({ userId }: ITokenPayload): Promise<TPrivateUser | null>;
}
export {};
