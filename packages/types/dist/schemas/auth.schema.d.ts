import { z } from "zod";
export declare const AuthDtoSchema: z.ZodObject<{
    name: z.ZodString;
    phone: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
