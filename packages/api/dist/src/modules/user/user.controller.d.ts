import { UserService } from './user.service';
import { User } from 'generated/prisma/client';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findMe(id: string): Promise<User | null>;
}
