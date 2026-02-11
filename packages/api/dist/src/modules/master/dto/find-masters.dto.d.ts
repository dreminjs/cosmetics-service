declare const FindManyMasterDto_base: import("nestjs-zod").ZodDto<import("zod").ZodObject<{
    skip: import("zod").ZodDefault<import("zod").ZodNumber>;
    take: import("zod").ZodDefault<import("zod").ZodNumber>;
    serviceId: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>, false>;
export declare class FindManyMasterDto extends FindManyMasterDto_base {
}
export {};
