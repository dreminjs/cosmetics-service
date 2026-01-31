import z from "zod";
import { paginationQuerySchema } from "./api.schema";

export const hireMasterFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Имя обязательно" })
    .max(100, { message: "Имя не должно превышать 100 символов" }),
  description: z
    .string()
    .max(1000, { message: "Описание не должно превышать 1000 символов" }),
  previewImage: z.string(),
});

export const updateMasterFormSchema = hireMasterFormSchema
  .extend({
    oldPreviewImage: z.string().optional(),
  })
  .partial();

export const findManyMasterQueryParamsSchema = paginationQuerySchema.extend({
  serviceId: z.string().uuid().optional(),
});
