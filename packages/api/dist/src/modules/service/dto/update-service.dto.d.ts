export declare const updateServiceSchema: import("zod").ZodObject<{
    description: import("zod").ZodOptional<import("zod").ZodString>;
    title: import("zod").ZodOptional<import("zod").ZodString>;
    price: import("zod").ZodOptional<import("zod").ZodNumber>;
    duration: import("zod").ZodOptional<import("zod").ZodNumber>;
}, import("zod/v4/core").$strip>;
declare const UpdateServiceDto_base: import("nestjs-zod").ZodDto<import("zod").ZodObject<{
    description: import("zod").ZodOptional<import("zod").ZodString>;
    title: import("zod").ZodOptional<import("zod").ZodString>;
    price: import("zod").ZodOptional<import("zod").ZodNumber>;
    duration: import("zod").ZodOptional<import("zod").ZodNumber>;
}, import("zod/v4/core").$strip>, false>;
export declare class UpdateServiceDto extends UpdateServiceDto_base {
}
export {};
