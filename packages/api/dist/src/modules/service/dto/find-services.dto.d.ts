declare const FindServiceQueryParamsDto_base: import("nestjs-zod").ZodDto<import("zod").ZodObject<{
    skip: import("zod").ZodDefault<import("zod").ZodNumber>;
    take: import("zod").ZodDefault<import("zod").ZodNumber>;
    title: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>, false>;
export declare class FindServiceQueryParamsDto extends FindServiceQueryParamsDto_base {
}
export {};
