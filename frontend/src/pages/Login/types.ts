import { z, ZodType } from "zod"; // Add new import

import { FieldError, UseFormRegister } from "react-hook-form";

export const LoginSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string(),
  })

  export type LoginFormData = {
    email: string;
    password: string;
  };