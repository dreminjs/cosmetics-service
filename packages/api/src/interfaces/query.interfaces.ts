import { paginationQuerySchema } from '@cosmetic-services/types';
import { createZodDto } from 'nestjs-zod';

export class FindManyQuery extends createZodDto(paginationQuerySchema) {}
