import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from 'generated/prisma/client';
import { TPublicUser } from '@cosmetic-services/types';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private logger;
    findOne(whereOptions: Prisma.UserWhereInput): Promise<User | null>;
    findPublicOne(id: string): Promise<TPublicUser | null>;
    findPrivateOne(id: string): Promise<any | null>;
    createOne(dto: Prisma.UserCreateInput): Promise<User>;
    updateOne(id: string, dto: Prisma.UserUpdateInput): Promise<User | null>;
}
