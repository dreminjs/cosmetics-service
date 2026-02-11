declare const UpdateBookingDto_base: import("nestjs-zod").ZodDto<import("zod").ZodObject<{
    masterId: import("zod").ZodOptional<import("zod").ZodString>;
    timeSlotId: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>, false>;
export declare class UpdateBookingDto extends UpdateBookingDto_base {
}
export {};
