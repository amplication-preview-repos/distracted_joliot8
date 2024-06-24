import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TryOnSessionListRelationFilter } from "../tryOnSession/TryOnSessionListRelationFilter";

export type OutfitWhereInput = {
  category?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: JsonFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  tryOnSessions?: TryOnSessionListRelationFilter;
};
