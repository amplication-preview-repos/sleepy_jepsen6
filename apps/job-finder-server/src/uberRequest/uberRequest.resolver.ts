import * as graphql from "@nestjs/graphql";
import { UberRequestResolverBase } from "./base/uberRequest.resolver.base";
import { UberRequest } from "./base/UberRequest";
import { UberRequestService } from "./uberRequest.service";

@graphql.Resolver(() => UberRequest)
export class UberRequestResolver extends UberRequestResolverBase {
  constructor(protected readonly service: UberRequestService) {
    super(service);
  }
}
