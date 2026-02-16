import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from 'generated/prisma/client';
import { TPublicUser, publicUserSchema } from '@cosmetic-services/types';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  public async findOne(args: Prisma.UserFindFirstArgs): Promise<User | null> {
    return await this.prisma.user.findFirst(args);
  }

  public async findPublicOne(id: string): Promise<TPublicUser | null> {
    const findedUser = await this.prisma.user.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        phone: true,
      },
    });
    return publicUserSchema.parse(findedUser);
  }

  public async createOne(dto: Prisma.UserCreateInput): Promise<User> {
    return await this.prisma.user.create({
      data: { ...dto },
    });
  }

  public async updateOne(
    id: string,
    dto: Prisma.UserUpdateInput,
  ): Promise<User | null> {
    return await this.prisma.user.update({
      where: {
        id,
      },
      data: { ...dto },
    });
  }
}
