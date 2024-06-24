import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OutfitService } from "./outfit.service";
import { OutfitControllerBase } from "./base/outfit.controller.base";

@swagger.ApiTags("outfits")
@common.Controller("outfits")
export class OutfitController extends OutfitControllerBase {
  constructor(protected readonly service: OutfitService) {
    super(service);
  }
}
