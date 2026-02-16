declare const FindManyTimeSlotDto_base: import("nestjs-zod").ZodDto<import("zod").ZodObject<{
    startDate: import("zod").ZodOptional<import("zod").ZodDate>;
    endDate: import("zod").ZodOptional<import("zod").ZodDate>;
    masterId: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>, false>;
export declare class FindManyTimeSlotDto extends FindManyTimeSlotDto_base {
}
export {};
