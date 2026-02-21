declare const SignupDto_base: import("nestjs-zod").ZodDto<import("zod").ZodObject<{
    name: import("zod").ZodString;
    phone: import("zod").ZodString;
    password: import("zod").ZodString;
}, import("zod/v4/core").$strip>, false>;
export declare class SignupDto extends SignupDto_base {
}
declare const SigninDto_base: import("nestjs-zod").ZodDto<import("zod").ZodObject<{
    phone: import("zod").ZodString;
    password: import("zod").ZodString;
}, import("zod/v4/core").$strip>, false>;
export declare class SigninDto extends SigninDto_base {
}
export {};
