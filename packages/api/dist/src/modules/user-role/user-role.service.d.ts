import { PrismaService } from '../prisma/prisma.service';
import { Role } from 'generated/prisma/enums';
import { UserRole } from 'generated/prisma/client';
export declare class UserRoleService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createOne(userId: string, role: Role): Promise<UserRole>;
    deleteOne(userId: string, role: Role): Promise<UserRole | null>;
}
