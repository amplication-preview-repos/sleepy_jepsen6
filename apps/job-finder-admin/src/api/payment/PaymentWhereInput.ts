import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  job?: JobWhereUniqueInput;
  worker?: StringNullableFilter;
};
