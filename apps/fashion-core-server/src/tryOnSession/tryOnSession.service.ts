import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TryOnSessionServiceBase } from "./base/tryOnSession.service.base";

@Injectable()
export class TryOnSessionService extends TryOnSessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
