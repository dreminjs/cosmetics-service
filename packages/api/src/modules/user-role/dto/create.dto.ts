import { assignUserRoleSchema } from '@cosmetic-services/types';
import { createZodDto } from 'nestjs-zod';

export class AssignUserRoleDto extends createZodDto(assignUserRoleSchema) {}
