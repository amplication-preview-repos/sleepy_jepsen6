import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  jobId?: SortOrder;
  updatedAt?: SortOrder;
  worker?: SortOrder;
};
