import { UberRequest as TUberRequest } from "../api/uberRequest/UberRequest";

export const UBERREQUEST_TITLE_FIELD = "dropOffLocation";

export const UberRequestTitle = (record: TUberRequest): string => {
  return record.dropOffLocation?.toString() || String(record.id);
};
