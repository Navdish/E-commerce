import { z, ZodType } from "zod"; // Add new import

import { FieldError, UseFormRegister } from "react-hook-form";

export type FormData = {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
    role: string;
  };

  export type FormFieldProps = {
    type: string;
    placeholder: string;
    name: ValidFieldNames;
    register: UseFormRegister<FormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
  };
  
  export type ValidFieldNames =
  | "email"
  | "name"
  | "password"
  | "confirmPassword"
  | "role";

export const UserSchema = z
  .object({
    name: z.string().min(1, {message: "Please enter your name"}),
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" }),
    confirmPassword: z.string(),
    role: z.enum(["USER", "VENDOR"]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});