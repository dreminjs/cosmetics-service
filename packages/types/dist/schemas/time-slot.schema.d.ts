import z from "zod";
export declare const createTimeSlotSchema: z.ZodObject<{
    id: z.ZodString;
    date: z.ZodDate;
    startTime: z.ZodString;
    endTime: z.ZodString;
    masterId: z.ZodString;
}, z.core.$strip>;
export declare const updateOneTimeSlotSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    date: z.ZodOptional<z.ZodDate>;
    startTime: z.ZodOptional<z.ZodString>;
    endTime: z.ZodOptional<z.ZodString>;
    masterId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const findManyTimeSlotSchema: z.ZodObject<{
    startDate: z.ZodOptional<z.ZodDate>;
    endDate: z.ZodOptional<z.ZodDate>;
    masterId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
