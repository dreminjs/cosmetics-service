import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import { User } from 'generated/prisma/client';

export const CurrentUser = createParamDecorator(
  (data: keyof User | undefined, ctx: ExecutionContext): User | string => {
    const request = ctx
      .switchToHttp()
      .getRequest<FastifyRequest & { user?: User }>();
    const user = request.user as User;

    if (!user) {
      throw new UnauthorizedException('User not found in the request');
    }

    return data ? user[data] : user;
  },
);
