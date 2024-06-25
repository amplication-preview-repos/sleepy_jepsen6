import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  fullName?: string | null;
  lastName?: string | null;
  password: string;
  phone?: string | null;
  roles: InputJsonValue;
  username: string;
};
