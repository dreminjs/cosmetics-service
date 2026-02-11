declare const CreateMasterDto_base: import("nestjs-zod").ZodDto<import("zod").ZodObject<{
    name: import("zod").ZodString;
    description: import("zod").ZodString;
    previewImage: import("zod").ZodString;
}, import("zod/v4/core").$strip>, false>;
export declare class CreateMasterDto extends CreateMasterDto_base {
}
export {};
