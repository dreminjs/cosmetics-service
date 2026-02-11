import z from "zod";

export const createTimeSlotSchema = z.object({
  id: z.string().uuid(),
  date: z.date(),
  startTime: z.string(),
  endTime: z.string(),
  masterId: z.string().uuid(),
});

export const updateOneTimeSlotSchema = createTimeSlotSchema.partial();
