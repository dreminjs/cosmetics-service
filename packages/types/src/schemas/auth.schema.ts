import { z } from "zod";

export const SignupDtoSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Nickname must be at least 3 characters long" })
    .max(100, { message: "Nickname must be at most 100 characters long" })
    .trim(),
  phone: z
    .string()
    .min(10)
    .max(15)
    .regex(/^\+?\d+$/, {
      message: "Номер должен содержать только цифры и может начинаться с +",
    }),
  password: z
    .string()
    .min(3, { message: "Password must be at least 3 characters long" })
    .max(100, { message: "Password must be at most 100 characters long" })
    .refine((password) => /[a-z]/.test(password), {
      message: "Password must contain at least one lowercase letter",
    })
    .refine((password) => /\d/.test(password), {
      message: "Password must contain at least one number",
    }),
});

export const SigninDtoSchema = SignupDtoSchema.omit({ name: true });
