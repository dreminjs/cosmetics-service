import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { ITokenPayload } from './token.interface';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, RefreshToken } from 'generated/prisma/client';
import { IStandartResponse } from '@cosmetic-services/types';
import { FastifyReply } from 'fastify';
export declare class TokenService {
    private readonly jwtService;
    private readonly prisma;
    private readonly configService;
    constructor(jwtService: JwtService, prisma: PrismaService, configService: ConfigService);
    deleteOne(args: Prisma.RefreshTokenDeleteArgs): Promise<RefreshToken>;
    generateTokens(payload: ITokenPayload, res: FastifyReply): Promise<IStandartResponse>;
    validateToken(token: string): Promise<ITokenPayload>;
    private saveRefreshToken;
    findOne(where: Prisma.RefreshTokenWhereInput): Promise<RefreshToken | null>;
    deleteRefreshToken(where: Prisma.RefreshTokenWhereUniqueInput): Promise<{
        id: string;
        token: string;
        userId: string;
    }>;
    private buildTokensResponse;
}
