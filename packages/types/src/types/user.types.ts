import z from "zod";
import {
  assignUserRoleSchema,
  deleteUserRoleSchema,
  updateUserRoleSchema,
} from "..";

export type TAssignUserRole = z.infer<typeof assignUserRoleSchema>;
export type TUpdateUserRole = z.infer<typeof updateUserRoleSchema>;
export type TDeleteUserRole = z.infer<typeof deleteUserRoleSchema>;
