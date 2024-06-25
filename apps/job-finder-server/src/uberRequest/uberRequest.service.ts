import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UberRequestServiceBase } from "./base/uberRequest.service.base";

@Injectable()
export class UberRequestService extends UberRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
