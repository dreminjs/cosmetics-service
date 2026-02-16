import z from "zod";
import {
  createTimeSlotSchema,
  findManyTimeSlotSchema,
  updateOneTimeSlotSchema,
} from "../schemas/time-slot.schema.js";

export type TCreateTimeSlot = z.infer<typeof createTimeSlotSchema>;

export type TUpdateTimeSlot = z.infer<typeof updateOneTimeSlotSchema>;

export type TFindManyTimeSlot = z.infer<typeof findManyTimeSlotSchema>;
