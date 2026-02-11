import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CurrentUser } from './user.decorator';
import { AccessTokenGuard } from '../token/guards/access-token.guard';
import { Role, User } from 'generated/prisma/client';
import { UserRoleService } from '../user-role';
import { AllowedRoles } from '../user-role/roles.decorator';
import { AssignUserRoleDto } from './dto/update.dto';
import { UserRole } from 'generated/prisma/browser';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly userRoleService: UserRoleService,
  ) {}

  @Get('me')
  @UseGuards(AccessTokenGuard)
  async findMe(@CurrentUser('id') id: string): Promise<User | null> {
    return await this.userService.findOne({
      where: {
        id,
      },
    });
  }

  @AllowedRoles(Role.OWNER)
  @Patch('/:userId/role')
  public async updateUserRole(
    @Param('userId', ParseUUIDPipe) userId: string,
    @Body() dto: AssignUserRoleDto,
  ): Promise<UserRole | null> {
    return await this.userRoleService.createOne(userId, dto.role as Role);
  }
}
