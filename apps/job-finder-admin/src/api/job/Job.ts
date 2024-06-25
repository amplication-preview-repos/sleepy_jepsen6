import { Payment } from "../payment/Payment";
import { UberRequest } from "../uberRequest/UberRequest";

export type Job = {
  assignedWorker: string | null;
  client: string | null;
  createdAt: Date;
  description: string | null;
  endTime: Date | null;
  id: string;
  jobType?: "Option1" | null;
  payments?: Array<Payment>;
  price: number | null;
  startTime: Date | null;
  status?: "Option1" | null;
  title: string | null;
  uberRequests?: Array<UberRequest>;
  updatedAt: Date;
};
