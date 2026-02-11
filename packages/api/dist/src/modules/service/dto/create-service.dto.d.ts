declare const CreateServiceDto_base: import("nestjs-zod").ZodDto<import("zod").ZodObject<{
    name: import("zod").ZodString;
    description: import("zod").ZodOptional<import("zod").ZodString>;
    price: import("zod").ZodOptional<import("zod").ZodNumber>;
}, import("zod/v4/core").$strip>, false>;
export declare class CreateServiceDto extends CreateServiceDto_base {
}
export {};
