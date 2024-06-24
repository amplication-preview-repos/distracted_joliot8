import { Module } from "@nestjs/common";
import { OutfitModuleBase } from "./base/outfit.module.base";
import { OutfitService } from "./outfit.service";
import { OutfitController } from "./outfit.controller";
import { OutfitResolver } from "./outfit.resolver";

@Module({
  imports: [OutfitModuleBase],
  controllers: [OutfitController],
  providers: [OutfitService, OutfitResolver],
  exports: [OutfitService],
})
export class OutfitModule {}
