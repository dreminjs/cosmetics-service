import { findManyMasterQueryParamsSchema } from '@cosmetic-services/types';
import { createZodDto } from 'nestjs-zod';

export class FindManyMasterDto extends createZodDto(
  findManyMasterQueryParamsSchema,
) {}
