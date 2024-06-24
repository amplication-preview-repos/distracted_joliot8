import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TryOnSessionListRelationFilter } from "../tryOnSession/TryOnSessionListRelationFilter";

export type UserWhereInput = {
  avatar?: JsonFilter;
  email?: StringNullableFilter;
  feedbacks?: FeedbackListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  tryOnSessions?: TryOnSessionListRelationFilter;
  username?: StringFilter;
};
