import z from "zod";

export const assignUserRoleSchema = z.object({
  userId: z.string().uuid(),
  role: z.union([z.literal("OWNER"), z.literal("CUSTOMER"), z.literal("USER")]),
});

export const updateUserRoleSchema = z.object({
  userId: z.string().uuid(),
  role: z.string().min(2).max(50),
});

export const deleteUserRoleSchema = z.object({
  userId: z.string().uuid(),
});
