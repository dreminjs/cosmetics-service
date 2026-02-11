import z from "zod";
import { createTimeSlotSchema, updateOneTimeSlotSchema } from "../schemas/time-slot.schema";
export type TCreateTimeSlot = z.infer<typeof createTimeSlotSchema>;
export type TUpdateTimeSlot = z.infer<typeof updateOneTimeSlotSchema>;
//# sourceMappingURL=time-slot.types.d.ts.map