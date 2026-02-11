import z from "zod";
export declare const assignUserRoleSchema: z.ZodObject<{
    userId: z.ZodString;
    role: z.ZodUnion<readonly [z.ZodLiteral<"OWNER">, z.ZodLiteral<"CUSTOMER">, z.ZodLiteral<"USER">]>;
}, z.core.$strip>;
export declare const updateUserRoleSchema: z.ZodObject<{
    userId: z.ZodString;
    role: z.ZodString;
}, z.core.$strip>;
export declare const deleteUserRoleSchema: z.ZodObject<{
    userId: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=user.schema.d.ts.map