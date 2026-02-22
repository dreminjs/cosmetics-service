declare const CreateServiceDto_base: import("nestjs-zod").ZodDto<import("zod").ZodObject<{
    title: import("zod").ZodString;
    description: import("zod").ZodString;
    price: import("zod").ZodNumber;
    duration: import("zod").ZodNumber;
}, import("zod/v4/core").$strip>, false>;
export declare class CreateServiceDto extends CreateServiceDto_base {
}
export {};
