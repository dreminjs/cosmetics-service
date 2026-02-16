import { Role } from 'generated/prisma/enums';

export const ROLES: Record<Role, Role> = {
  MASTER: Role.MASTER,
  OWNER: Role.OWNER,
  CUSTOMER: Role.CUSTOMER,
};
