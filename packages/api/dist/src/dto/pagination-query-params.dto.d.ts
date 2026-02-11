declare const PaginationQueryParamsDto_base: import("nestjs-zod").ZodDto<import("zod").ZodObject<{
    skip: import("zod").ZodDefault<import("zod").ZodNumber>;
    take: import("zod").ZodDefault<import("zod").ZodNumber>;
}, import("zod/v4/core").$strip>, false>;
export declare class PaginationQueryParamsDto extends PaginationQueryParamsDto_base {
}
export {};
