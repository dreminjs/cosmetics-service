import z from "zod";
export declare const hireMasterFormSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    previewImage: z.ZodString;
}, z.core.$strip>;
export declare const updateMasterFormSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    previewImage: z.ZodOptional<z.ZodString>;
    oldPreviewImage: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export declare const findManyMasterQueryParamsSchema: z.ZodObject<{
    skip: z.ZodDefault<z.ZodNumber>;
    take: z.ZodDefault<z.ZodNumber>;
    serviceId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=master.schema.d.ts.map