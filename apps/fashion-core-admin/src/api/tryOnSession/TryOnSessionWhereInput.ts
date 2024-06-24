import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OutfitWhereUniqueInput } from "../outfit/OutfitWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TryOnSessionWhereInput = {
  feedback?: StringNullableFilter;
  id?: StringFilter;
  outfit?: OutfitWhereUniqueInput;
  tryOnDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
