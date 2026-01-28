import { z } from "zod";

export const paginationQuerySchema = z.object({
  skip: z.number().int().min(0).default(0),
  take: z.number().int().min(1).max(100).default(10),
});
