import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from 'generated/prisma/client';
import {
  TPrivateUser,
  TPublicUser,
  privateUserSchema,
  publicUserSchema,
} from '@cosmetic-services/types';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  private logger = new Logger(UserService.name);

  public async findOne(
    whereOptions: Prisma.UserWhereInput,
  ): Promise<User | null> {
    return await this.prisma.user.findFirst({
      where: whereOptions,
    });
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

  public async findPrivateOne(id: string): Promise<any | null> {
    const findedUser = await this.prisma.user.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        phone: true,
        role: {
          select: {
            role: true,
          },
        },
      },
    });

    return privateUserSchema.parse(findedUser);
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
