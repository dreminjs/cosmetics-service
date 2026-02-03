import z from "zod";

export const createBookingSchema = z.object({
  masterId: z.string(),
  timeSlotId: z.string(),
});

export const updateBookingSchema = createBookingSchema.extend({}).partial();
