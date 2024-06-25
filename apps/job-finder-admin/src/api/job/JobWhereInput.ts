import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UberRequestListRelationFilter } from "../uberRequest/UberRequestListRelationFilter";

export type JobWhereInput = {
  assignedWorker?: StringNullableFilter;
  client?: StringNullableFilter;
  description?: StringNullableFilter;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  jobType?: "Option1";
  payments?: PaymentListRelationFilter;
  price?: FloatNullableFilter;
  startTime?: DateTimeNullableFilter;
  status?: "Option1";
  title?: StringNullableFilter;
  uberRequests?: UberRequestListRelationFilter;
};
