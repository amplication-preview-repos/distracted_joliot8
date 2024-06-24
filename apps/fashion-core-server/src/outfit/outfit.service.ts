import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OutfitServiceBase } from "./base/outfit.service.base";

@Injectable()
export class OutfitService extends OutfitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
