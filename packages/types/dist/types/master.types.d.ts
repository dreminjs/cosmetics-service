import z from "zod";
import { findManyMasterQueryParamsSchema, hireMasterFormSchema, updateMasterFormSchema } from "../schemas/master.schema";
export type THireMasterDto = z.infer<typeof hireMasterFormSchema>;
export type TUpdateMasterDto = z.infer<typeof updateMasterFormSchema>;
export type TFindManyMasterDto = z.infer<typeof findManyMasterQueryParamsSchema>;
//# sourceMappingURL=master.types.d.ts.map