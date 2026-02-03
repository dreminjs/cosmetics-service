import z from "zod";
import { createServiceSchema, findManyServicesQueryParamsSchema, updateServiceSchema } from "../schemas/service.schema";
export type TCreateService = z.infer<typeof createServiceSchema>;
export type TUpdateService = z.infer<typeof updateServiceSchema>;
export type TFindManyServicesQueryParams = z.infer<typeof findManyServicesQueryParamsSchema>;
//# sourceMappingURL=service.types.d.ts.map