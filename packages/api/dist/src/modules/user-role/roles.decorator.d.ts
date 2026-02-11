import { Role } from 'generated/prisma/enums';
export declare const ROLES_KEY = "roles";
export declare const AllowedRoles: (...roles: [Role, ...Role[]]) => import("@nestjs/common").CustomDecorator<string>;
