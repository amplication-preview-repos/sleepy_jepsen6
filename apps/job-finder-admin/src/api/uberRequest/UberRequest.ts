import { Job } from "../job/Job";

export type UberRequest = {
  createdAt: Date;
  dropOffLocation: string | null;
  id: string;
  job?: Job | null;
  passenger: string | null;
  pickupLocation: string | null;
  requestTime: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
