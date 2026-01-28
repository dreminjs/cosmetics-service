declare const AuthDto_base: import("nestjs-zod").ZodDto<import("zod").ZodObject<{
    name: import("zod").ZodString;
    password: import("zod").ZodString;
}, import("zod/v4/core").$strip>, false>;
export declare class AuthDto extends AuthDto_base {
}
export {};
