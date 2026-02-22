import z from "zod";

export const UserRoleSchema = z.enum(["OWNER", "CUSTOMER", "USER"]);

export const assignUserRoleSchema = z.object({
  userId: z.string().uuid(),
  role: UserRoleSchema,
});

export const updateUserRoleSchema = assignUserRoleSchema;

export const deleteUserRoleSchema = z.object({
  userId: z.string().uuid(),
});

export const publicUserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2).max(50),
  phone: z.string().min(2).max(50),
});

export const privateUserSchema = publicUserSchema.extend({
  role: z
    .array(z.object({ role: UserRoleSchema }))
    .transform((roles) => roles.map((r) => r.role)),
});
