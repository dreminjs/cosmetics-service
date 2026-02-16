import { z } from "zod";
import { AuthDtoSchema } from "../schemas/auth.schema.js";

export type AuthDto = z.infer<typeof AuthDtoSchema>;
