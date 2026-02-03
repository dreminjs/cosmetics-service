import z from "zod";
import { paginationQuerySchema } from "./api.schema";

export const createServiceSchema = z.object({
  name: z.string().min(2).max(100),
  description: z.string().min(2).max(500).optional(),
  price: z.number().min(0).max(100000).optional(),
});

export const updateServiceSchema = createServiceSchema.extend({}).partial();

export const findManyServicesQueryParamsSchema = paginationQuerySchema.extend({
  title: z.string().optional(),
});
