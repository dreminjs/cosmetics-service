declare const CreateTimeSlotDto_base: import("nestjs-zod").ZodDto<import("zod").ZodObject<{
    id: import("zod").ZodString;
    date: import("zod").ZodDate;
    startTime: import("zod").ZodString;
    endTime: import("zod").ZodString;
    masterId: import("zod").ZodString;
}, import("zod/v4/core").$strip>, false>;
export declare class CreateTimeSlotDto extends CreateTimeSlotDto_base {
}
export {};
