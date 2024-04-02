
type ValidFieldNames =
  | "email"
  | "name"
  | "password"
  | "confirmPassword"
  | "role"

type userProps = {
    name: string
    email: string
    role: string
}

type loginProps = {
  email: string
  password: string
  role: string
}