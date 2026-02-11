import { SetMetadata } from '@nestjs/common';
import { Role } from 'generated/prisma/enums';

export const ROLES_KEY = 'roles';
export const AllowedRoles = (...roles: [Role, ...Role[]]) =>
  SetMetadata('roles', roles);
