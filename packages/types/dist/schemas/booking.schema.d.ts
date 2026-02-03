import z from "zod";
export declare const createBookingSchema: z.ZodObject<{
    masterId: z.ZodString;
    timeSlotId: z.ZodString;
}, z.core.$strip>;
export declare const updateBookingSchema: z.ZodObject<{
    masterId: z.ZodOptional<z.ZodString>;
    timeSlotId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=booking.schema.d.ts.map