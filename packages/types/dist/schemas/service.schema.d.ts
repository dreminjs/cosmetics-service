import z from "zod";
export declare const createServiceSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const updateServiceSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    price: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
}, z.core.$strip>;
export declare const findManyServicesQueryParamsSchema: z.ZodObject<{
    skip: z.ZodDefault<z.ZodNumber>;
    take: z.ZodDefault<z.ZodNumber>;
    title: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=service.schema.d.ts.map