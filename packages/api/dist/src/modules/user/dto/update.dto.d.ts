declare const AssignUserRoleDto_base: import("nestjs-zod").ZodDto<import("zod").ZodObject<{
    userId: import("zod").ZodString;
    role: import("zod").ZodUnion<readonly [import("zod").ZodLiteral<"OWNER">, import("zod").ZodLiteral<"CUSTOMER">, import("zod").ZodLiteral<"USER">]>;
}, import("zod/v4/core").$strip>, false>;
export declare class AssignUserRoleDto extends AssignUserRoleDto_base {
}
export {};
