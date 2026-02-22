import z from "zod";
export declare const UserRoleSchema: z.ZodEnum<{
    OWNER: "OWNER";
    CUSTOMER: "CUSTOMER";
    USER: "USER";
}>;
export declare const assignUserRoleSchema: z.ZodObject<{
    userId: z.ZodString;
    role: z.ZodEnum<{
        OWNER: "OWNER";
        CUSTOMER: "CUSTOMER";
        USER: "USER";
    }>;
}, z.core.$strip>;
export declare const updateUserRoleSchema: z.ZodObject<{
    userId: z.ZodString;
    role: z.ZodEnum<{
        OWNER: "OWNER";
        CUSTOMER: "CUSTOMER";
        USER: "USER";
    }>;
}, z.core.$strip>;
export declare const deleteUserRoleSchema: z.ZodObject<{
    userId: z.ZodString;
}, z.core.$strip>;
export declare const publicUserSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    phone: z.ZodString;
}, z.core.$strip>;
export declare const privateUserSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    phone: z.ZodString;
    role: z.ZodPipe<z.ZodArray<z.ZodObject<{
        role: z.ZodEnum<{
            OWNER: "OWNER";
            CUSTOMER: "CUSTOMER";
            USER: "USER";
        }>;
    }, z.core.$strip>>, z.ZodTransform<("OWNER" | "CUSTOMER" | "USER")[], {
        role: "OWNER" | "CUSTOMER" | "USER";
    }[]>>;
}, z.core.$strip>;
