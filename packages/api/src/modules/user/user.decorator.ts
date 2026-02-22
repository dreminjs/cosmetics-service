import { TPrivateUser } from '@cosmetic-services/types';
import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { FastifyRequest } from 'fastify';

export const CurrentUser = createParamDecorator(
  <K extends keyof TPrivateUser>(
    data: K | undefined,
    ctx: ExecutionContext,
  ): TPrivateUser | TPrivateUser[K] => {
    const request = ctx
      .switchToHttp()
      .getRequest<FastifyRequest & { user?: TPrivateUser }>();

    const user = request.user;
    if (!user) {
      throw new UnauthorizedException('User not found in the request');
    }

    return data ? user[data] : user;
  },
);
