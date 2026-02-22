import z from "zod";
import { assignUserRoleSchema, deleteUserRoleSchema, privateUserSchema, publicUserSchema, updateUserRoleSchema, UserRoleSchema } from "../schemas/user.schema";
export type TAssignUserRole = z.infer<typeof assignUserRoleSchema>;
export type TUpdateUserRole = z.infer<typeof updateUserRoleSchema>;
export type TDeleteUserRole = z.infer<typeof deleteUserRoleSchema>;
export type TPublicUser = z.infer<typeof publicUserSchema>;
export type TPrivateUser = z.infer<typeof privateUserSchema>;
export type UserRole = z.infer<typeof UserRoleSchema>;
