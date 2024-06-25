import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  date?: Date | null;
  job?: JobWhereUniqueInput | null;
  worker?: string | null;
};
