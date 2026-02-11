import { UserService } from './user.service';
import { User } from 'generated/prisma/client';
import { UserRoleService } from '../user-role';
import { AssignUserRoleDto } from './dto/update.dto';
import { UserRole } from 'generated/prisma/browser';
export declare class UserController {
    private readonly userService;
    private readonly userRoleService;
    constructor(userService: UserService, userRoleService: UserRoleService);
    findMe(id: string): Promise<User | null>;
    updateUserRole(userId: string, dto: AssignUserRoleDto): Promise<UserRole | null>;
}
