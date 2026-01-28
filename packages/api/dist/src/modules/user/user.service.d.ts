import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from 'generated/prisma/client';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findOne(args: Prisma.UserFindFirstArgs): Promise<User | null>;
    createOne(dto: Prisma.UserCreateInput): Promise<User>;
}
