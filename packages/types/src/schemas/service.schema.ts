import z from "zod";
import { paginationQuerySchema } from "./api.schema.js";

export const serviceSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(2).max(100),
  description: z.string().min(2).max(500),
  price: z.number().min(0).max(100000),
  duration: z.number().min(0).max(100000),
});
export const findManyServicesQueryParamsSchema = paginationQuerySchema.extend({
  title: z.string().optional(),
});
