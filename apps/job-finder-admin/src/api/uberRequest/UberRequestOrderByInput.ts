import { SortOrder } from "../../util/SortOrder";

export type UberRequestOrderByInput = {
  createdAt?: SortOrder;
  dropOffLocation?: SortOrder;
  id?: SortOrder;
  jobId?: SortOrder;
  passenger?: SortOrder;
  pickupLocation?: SortOrder;
  requestTime?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
