import * as graphql from "@nestjs/graphql";
import { TryOnSessionResolverBase } from "./base/tryOnSession.resolver.base";
import { TryOnSession } from "./base/TryOnSession";
import { TryOnSessionService } from "./tryOnSession.service";

@graphql.Resolver(() => TryOnSession)
export class TryOnSessionResolver extends TryOnSessionResolverBase {
  constructor(protected readonly service: TryOnSessionService) {
    super(service);
  }
}
