import { Body, Controller, Delete, Post, Res } from '@nestjs/common';
import { SigninDto, SignupDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { CurrentUser } from '../user/user.decorator';
import { IStandartResponse } from '@cosmetic-services/types';
import { FastifyReply } from 'fastify';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() dto: SignupDto,
    @Res({ passthrough: true }) response: FastifyReply,
  ): Promise<IStandartResponse> {
    return this.authService.register(dto, response);
  }

  @Post('login')
  async login(
    @Body() dto: SigninDto,
    @Res({ passthrough: true }) response: FastifyReply,
  ): Promise<IStandartResponse> {
    return this.authService.login(dto, response);
  }

  @Delete('logout')
  async logout(@CurrentUser('id') userId: string): Promise<void> {
    await this.authService.logout(userId);
  }
}
