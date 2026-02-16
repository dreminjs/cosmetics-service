import z from "zod";
import { findManyServicesQueryParamsSchema } from "../schemas/service.schema.js";

export type TFindManyServicesQueryParams = z.infer<
  typeof findManyServicesQueryParamsSchema
>;
