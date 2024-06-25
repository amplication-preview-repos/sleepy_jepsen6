import { PaymentUpdateManyWithoutJobsInput } from "./PaymentUpdateManyWithoutJobsInput";
import { UberRequestUpdateManyWithoutJobsInput } from "./UberRequestUpdateManyWithoutJobsInput";

export type JobUpdateInput = {
  assignedWorker?: string | null;
  client?: string | null;
  description?: string | null;
  endTime?: Date | null;
  jobType?: "Option1" | null;
  payments?: PaymentUpdateManyWithoutJobsInput;
  price?: number | null;
  startTime?: Date | null;
  status?: "Option1" | null;
  title?: string | null;
  uberRequests?: UberRequestUpdateManyWithoutJobsInput;
};
