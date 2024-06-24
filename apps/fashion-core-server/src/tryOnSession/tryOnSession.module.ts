import { Module } from "@nestjs/common";
import { TryOnSessionModuleBase } from "./base/tryOnSession.module.base";
import { TryOnSessionService } from "./tryOnSession.service";
import { TryOnSessionController } from "./tryOnSession.controller";
import { TryOnSessionResolver } from "./tryOnSession.resolver";

@Module({
  imports: [TryOnSessionModuleBase],
  controllers: [TryOnSessionController],
  providers: [TryOnSessionService, TryOnSessionResolver],
  exports: [TryOnSessionService],
})
export class TryOnSessionModule {}
