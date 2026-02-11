import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from 'generated/prisma/enums';
import { UserRole } from 'generated/prisma/client';

@Injectable()
export class UserRoleService {
  constructor(private readonly prisma: PrismaService) {}

  async createOne(userId: string, role: Role): Promise<UserRole> {
    return await this.prisma.userRole.create({
      data: {
        userId,
        role,
      },
    });
  }

  async deleteOne(userId: string, role: Role): Promise<UserRole | null> {
    return await this.prisma.userRole.delete({
      where: {
        userId_role: {
          userId,
          role,
        },
      },
    });
  }
}
