import { z, ZodType } from "zod"; // Add new import

import { FieldError, UseFormRegister } from "react-hook-form";

type FormData = {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
  };

type FormFieldProps = {
    type: string;
    placeholder: string;
    name: ValidFieldNames;
    register: UseFormRegister<FormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
  };
  
type ValidFieldNames =
  | "email"
  | "name"
  | "password"
  | "confirmPassword";

