import { Module } from "@nestjs/common";
import { UberRequestModuleBase } from "./base/uberRequest.module.base";
import { UberRequestService } from "./uberRequest.service";
import { UberRequestController } from "./uberRequest.controller";
import { UberRequestResolver } from "./uberRequest.resolver";

@Module({
  imports: [UberRequestModuleBase],
  controllers: [UberRequestController],
  providers: [UberRequestService, UberRequestResolver],
  exports: [UberRequestService],
})
export class UberRequestModule {}
