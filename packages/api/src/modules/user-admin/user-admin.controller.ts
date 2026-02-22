import { Controller, Get, Logger, UseGuards } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AllowedRoles, RolesGuard } from '../user-role';
import { Role } from 'generated/prisma/enums';
import { CurrentUser } from '../user/user.decorator';
import { AccessTokenGuard } from '../token/guards/access-token.guard';
import { TPrivateUser } from '@cosmetic-services/types';

@AllowedRoles(Role.OWNER)
@UseGuards(AccessTokenGuard, RolesGuard)
@Controller('admin/users')
export class UserAdminController {
  constructor(private readonly userService: UserService) {}
  private logger = new Logger(UserAdminController.name);
  @Get('me')
  public async findMe(
    @CurrentUser('id') userId: string,
  ): Promise<TPrivateUser | null> {
    const findedUser = await this.userService.findPrivateOne(userId);
    return findedUser;
  }
}
