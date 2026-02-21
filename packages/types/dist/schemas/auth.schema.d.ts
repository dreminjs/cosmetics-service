import { z } from "zod";
export declare const SignupDtoSchema: z.ZodObject<{
    name: z.ZodString;
    phone: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const SigninDtoSchema: z.ZodObject<{
    phone: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
