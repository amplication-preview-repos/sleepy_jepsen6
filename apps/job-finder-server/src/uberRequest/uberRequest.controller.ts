import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UberRequestService } from "./uberRequest.service";
import { UberRequestControllerBase } from "./base/uberRequest.controller.base";

@swagger.ApiTags("uberRequests")
@common.Controller("uberRequests")
export class UberRequestController extends UberRequestControllerBase {
  constructor(protected readonly service: UberRequestService) {
    super(service);
  }
}
