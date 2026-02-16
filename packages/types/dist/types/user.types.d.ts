import z from "zod";
import { assignUserRoleSchema, deleteUserRoleSchema, publicUserSchema, updateUserRoleSchema } from "../schemas/user.schema";
export type TAssignUserRole = z.infer<typeof assignUserRoleSchema>;
export type TUpdateUserRole = z.infer<typeof updateUserRoleSchema>;
export type TDeleteUserRole = z.infer<typeof deleteUserRoleSchema>;
export type TPublicUser = z.infer<typeof publicUserSchema>;
