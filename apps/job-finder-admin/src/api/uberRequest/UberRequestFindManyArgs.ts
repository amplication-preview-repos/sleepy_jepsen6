import { UberRequestWhereInput } from "./UberRequestWhereInput";
import { UberRequestOrderByInput } from "./UberRequestOrderByInput";

export type UberRequestFindManyArgs = {
  where?: UberRequestWhereInput;
  orderBy?: Array<UberRequestOrderByInput>;
  skip?: number;
  take?: number;
};
