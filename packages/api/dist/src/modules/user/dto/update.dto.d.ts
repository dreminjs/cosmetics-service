declare const AssignUserRoleDto_base: import("nestjs-zod").ZodDto<import("zod").ZodObject<{
    userId: import("zod").ZodString;
    role: import("zod").ZodEnum<{
        OWNER: "OWNER";
        CUSTOMER: "CUSTOMER";
        USER: "USER";
    }>;
}, import("zod/v4/core").$strip>, false>;
export declare class AssignUserRoleDto extends AssignUserRoleDto_base {
}
export {};
