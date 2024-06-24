/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TryOnSessionWhereUniqueInput } from "./TryOnSessionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TryOnSessionUpdateInput } from "./TryOnSessionUpdateInput";

@ArgsType()
class UpdateTryOnSessionArgs {
  @ApiProperty({
    required: true,
    type: () => TryOnSessionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TryOnSessionWhereUniqueInput)
  @Field(() => TryOnSessionWhereUniqueInput, { nullable: false })
  where!: TryOnSessionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TryOnSessionUpdateInput,
  })
  @ValidateNested()
  @Type(() => TryOnSessionUpdateInput)
  @Field(() => TryOnSessionUpdateInput, { nullable: false })
  data!: TryOnSessionUpdateInput;
}

export { UpdateTryOnSessionArgs as UpdateTryOnSessionArgs };
