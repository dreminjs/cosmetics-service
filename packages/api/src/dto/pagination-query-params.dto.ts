import { paginationQuerySchema } from '@cosmetic-services/types';
import { createZodDto } from 'nestjs-zod';

export class PaginationQueryParamsDto extends createZodDto(
  paginationQuerySchema,
) {}
