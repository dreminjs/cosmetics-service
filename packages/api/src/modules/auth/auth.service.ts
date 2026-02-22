import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TokenService } from '../token/token.service';
import { UserService } from '../user/user.service';
import { FastifyReply } from 'fastify';
import { hash, compare } from 'bcrypt';
import { Role } from 'generated/prisma/client';
import { SigninDto, SignupDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  async register(dto: SignupDto, res: FastifyReply) {
    const hashedPassword = await hash(dto.password, 10);

    const user = await this.userService.createOne({
      name: dto.name,
      hashedPassword: hashedPassword,
      phone: dto.phone,
      role: {
        create: {
          role: Role.CUSTOMER,
        },
      },
    });

    return this.tokenService.generateTokens(
      {
        userId: user.id,
      },
      res,
    );
  }

  async login(dto: SigninDto, res: FastifyReply) {
    const user = await this.userService.findOne({
      phone: dto.phone,
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const isPasswordValid = await compare(dto.password, user?.hashedPassword);

    if (!isPasswordValid) {
      throw new HttpException('Invalid password', HttpStatus.CONFLICT);
    }

    return this.tokenService.generateTokens(
      {
        userId: user?.id,
      },
      res,
    );
  }

  async logout(userId: string): Promise<void> {
    await this.tokenService.deleteRefreshToken({ userId });
  }

  async validateUser(email: string, password: string): Promise<void> {
    // TODO: Validate user credentials
  }
}
