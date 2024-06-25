import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  date?: Date | null;
  job?: JobWhereUniqueInput | null;
  worker?: string | null;
};
