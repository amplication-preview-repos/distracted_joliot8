/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { TryOnSession } from "./TryOnSession";
import { TryOnSessionCountArgs } from "./TryOnSessionCountArgs";
import { TryOnSessionFindManyArgs } from "./TryOnSessionFindManyArgs";
import { TryOnSessionFindUniqueArgs } from "./TryOnSessionFindUniqueArgs";
import { CreateTryOnSessionArgs } from "./CreateTryOnSessionArgs";
import { UpdateTryOnSessionArgs } from "./UpdateTryOnSessionArgs";
import { DeleteTryOnSessionArgs } from "./DeleteTryOnSessionArgs";
import { Outfit } from "../../outfit/base/Outfit";
import { User } from "../../user/base/User";
import { TryOnSessionService } from "../tryOnSession.service";
@graphql.Resolver(() => TryOnSession)
export class TryOnSessionResolverBase {
  constructor(protected readonly service: TryOnSessionService) {}

  async _tryOnSessionsMeta(
    @graphql.Args() args: TryOnSessionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [TryOnSession])
  async tryOnSessions(
    @graphql.Args() args: TryOnSessionFindManyArgs
  ): Promise<TryOnSession[]> {
    return this.service.tryOnSessions(args);
  }

  @graphql.Query(() => TryOnSession, { nullable: true })
  async tryOnSession(
    @graphql.Args() args: TryOnSessionFindUniqueArgs
  ): Promise<TryOnSession | null> {
    const result = await this.service.tryOnSession(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => TryOnSession)
  async createTryOnSession(
    @graphql.Args() args: CreateTryOnSessionArgs
  ): Promise<TryOnSession> {
    return await this.service.createTryOnSession({
      ...args,
      data: {
        ...args.data,

        outfit: args.data.outfit
          ? {
              connect: args.data.outfit,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => TryOnSession)
  async updateTryOnSession(
    @graphql.Args() args: UpdateTryOnSessionArgs
  ): Promise<TryOnSession | null> {
    try {
      return await this.service.updateTryOnSession({
        ...args,
        data: {
          ...args.data,

          outfit: args.data.outfit
            ? {
                connect: args.data.outfit,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TryOnSession)
  async deleteTryOnSession(
    @graphql.Args() args: DeleteTryOnSessionArgs
  ): Promise<TryOnSession | null> {
    try {
      return await this.service.deleteTryOnSession(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Outfit, {
    nullable: true,
    name: "outfit",
  })
  async getOutfit(
    @graphql.Parent() parent: TryOnSession
  ): Promise<Outfit | null> {
    const result = await this.service.getOutfit(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: TryOnSession): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
