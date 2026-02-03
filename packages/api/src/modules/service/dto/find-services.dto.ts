import { findManyServicesQueryParamsSchema } from '@cosmetic-services/types';
import { createZodDto } from 'nestjs-zod';

export class FindServiceQueryParamsDto extends createZodDto(
  findManyServicesQueryParamsSchema,
) {}
