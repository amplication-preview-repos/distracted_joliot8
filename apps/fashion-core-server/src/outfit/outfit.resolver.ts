import * as graphql from "@nestjs/graphql";
import { OutfitResolverBase } from "./base/outfit.resolver.base";
import { Outfit } from "./base/Outfit";
import { OutfitService } from "./outfit.service";

@graphql.Resolver(() => Outfit)
export class OutfitResolver extends OutfitResolverBase {
  constructor(protected readonly service: OutfitService) {
    super(service);
  }
}
