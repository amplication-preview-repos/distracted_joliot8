import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TryOnSessionService } from "./tryOnSession.service";
import { TryOnSessionControllerBase } from "./base/tryOnSession.controller.base";

@swagger.ApiTags("tryOnSessions")
@common.Controller("tryOnSessions")
export class TryOnSessionController extends TryOnSessionControllerBase {
  constructor(protected readonly service: TryOnSessionService) {
    super(service);
  }
}
