declare const UpdateTimeSlotDto_base: import("nestjs-zod").ZodDto<import("zod").ZodObject<{
    id: import("zod").ZodOptional<import("zod").ZodString>;
    date: import("zod").ZodOptional<import("zod").ZodDate>;
    startTime: import("zod").ZodOptional<import("zod").ZodString>;
    endTime: import("zod").ZodOptional<import("zod").ZodString>;
    masterId: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>, false>;
export declare class UpdateTimeSlotDto extends UpdateTimeSlotDto_base {
}
export {};
