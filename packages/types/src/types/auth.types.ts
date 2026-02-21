import { z } from "zod";
import { SigninDtoSchema, SignupDtoSchema } from "../schemas/auth.schema";

export type SignupDto = z.infer<typeof SignupDtoSchema>;

export type SigninDto = z.infer<typeof SigninDtoSchema>;
