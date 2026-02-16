import z from "zod";
export const createTimeSlotSchema = z.object({
    id: z.string().uuid(),
    date: z.date(),
    startTime: z.string(),
    endTime: z.string(),
    masterId: z.string().uuid(),
});
export const updateOneTimeSlotSchema = createTimeSlotSchema.partial();
export const findManyTimeSlotSchema = z.object({
    startDate: z.date().min(new Date()).optional(),
    endDate: z.date().min(new Date()).optional(),
    masterId: z.string().uuid().optional(),
});
