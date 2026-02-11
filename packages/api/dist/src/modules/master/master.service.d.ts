import { Master, Prisma } from 'generated/prisma/browser';
import { PrismaService } from '../prisma/prisma.service';
export declare class MasterService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: Prisma.MasterCreateInput): Promise<Master>;
    findMany(args: Prisma.MasterFindManyArgs): Promise<Master[]>;
    findOne(id: string): Promise<Master | null>;
    update(id: string, dto: Prisma.MasterUpdateInput): Promise<Master>;
    count(args: Prisma.MasterCountArgs): Promise<number>;
    findOneById(id: string): Promise<Master | null>;
}
