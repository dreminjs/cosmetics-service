import { UserService } from './user.service';
import { UserRoleService } from '../user-role';
import { AssignUserRoleDto } from './dto/update.dto';
import { UserRole } from 'generated/prisma/browser';
import { TPublicUser } from '@cosmetic-services/types';
export declare class UserController {
    private readonly userService;
    private readonly userRoleService;
    constructor(userService: UserService, userRoleService: UserRoleService);
    findMe(id: string): Promise<TPublicUser | null>;
    updateUserRole(userId: string, dto: AssignUserRoleDto): Promise<UserRole | null>;
}
