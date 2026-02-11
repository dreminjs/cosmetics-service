declare const UpdateServiceDto_base: import("nestjs-zod").ZodDto<import("zod").ZodObject<{
    name: import("zod").ZodOptional<import("zod").ZodString>;
    description: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
    price: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNumber>>;
}, import("zod/v4/core").$strip>, false>;
export declare class UpdateServiceDto extends UpdateServiceDto_base {
}
export {};
