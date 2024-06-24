import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackWhereInput = {
  comment?: StringNullableFilter;
  id?: StringFilter;
  rating?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
