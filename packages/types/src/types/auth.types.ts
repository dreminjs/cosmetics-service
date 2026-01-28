import { z } from "zod";
import { AuthDtoSchema } from "../schemas/auth.schema";

export type AuthDto = z.infer<typeof AuthDtoSchema>;
