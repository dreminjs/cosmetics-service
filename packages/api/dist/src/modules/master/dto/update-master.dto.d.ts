declare const UpdateMasterDto_base: import("nestjs-zod").ZodDto<import("zod").ZodObject<{
    name: import("zod").ZodOptional<import("zod").ZodString>;
    description: import("zod").ZodOptional<import("zod").ZodString>;
    previewImage: import("zod").ZodOptional<import("zod").ZodString>;
    oldPreviewImage: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
}, import("zod/v4/core").$strip>, false>;
export declare class UpdateMasterDto extends UpdateMasterDto_base {
}
export {};
