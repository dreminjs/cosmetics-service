declare const CreateBookingDto_base: import("nestjs-zod").ZodDto<import("zod").ZodObject<{
    masterId: import("zod").ZodString;
    timeSlotId: import("zod").ZodString;
}, import("zod/v4/core").$strip>, false>;
export declare class CreateBookingDto extends CreateBookingDto_base {
}
export {};
