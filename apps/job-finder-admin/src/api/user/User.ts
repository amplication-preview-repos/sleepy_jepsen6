import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  fullName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
