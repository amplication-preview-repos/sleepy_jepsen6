import { PaymentCreateNestedManyWithoutJobsInput } from "./PaymentCreateNestedManyWithoutJobsInput";
import { UberRequestCreateNestedManyWithoutJobsInput } from "./UberRequestCreateNestedManyWithoutJobsInput";

export type JobCreateInput = {
  assignedWorker?: string | null;
  client?: string | null;
  description?: string | null;
  endTime?: Date | null;
  jobType?: "Option1" | null;
  payments?: PaymentCreateNestedManyWithoutJobsInput;
  price?: number | null;
  startTime?: Date | null;
  status?: "Option1" | null;
  title?: string | null;
  uberRequests?: UberRequestCreateNestedManyWithoutJobsInput;
};
