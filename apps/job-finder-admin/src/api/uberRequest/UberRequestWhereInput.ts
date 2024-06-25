import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type UberRequestWhereInput = {
  dropOffLocation?: StringNullableFilter;
  id?: StringFilter;
  job?: JobWhereUniqueInput;
  passenger?: StringNullableFilter;
  pickupLocation?: StringNullableFilter;
  requestTime?: DateTimeNullableFilter;
  status?: "Option1";
};
