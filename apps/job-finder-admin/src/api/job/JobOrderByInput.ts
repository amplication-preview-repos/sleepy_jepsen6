import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  assignedWorker?: SortOrder;
  client?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  jobType?: SortOrder;
  price?: SortOrder;
  startTime?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
