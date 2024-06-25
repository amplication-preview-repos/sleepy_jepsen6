import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type UberRequestCreateInput = {
  dropOffLocation?: string | null;
  job?: JobWhereUniqueInput | null;
  passenger?: string | null;
  pickupLocation?: string | null;
  requestTime?: Date | null;
  status?: "Option1" | null;
};
