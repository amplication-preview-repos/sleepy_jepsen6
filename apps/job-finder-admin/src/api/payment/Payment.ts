import { Job } from "../job/Job";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  job?: Job | null;
  updatedAt: Date;
  worker: string | null;
};
