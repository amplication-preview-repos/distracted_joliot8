import { InputJsonValue } from "../../types";
import { FeedbackCreateNestedManyWithoutUsersInput } from "./FeedbackCreateNestedManyWithoutUsersInput";
import { TryOnSessionCreateNestedManyWithoutUsersInput } from "./TryOnSessionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  avatar?: InputJsonValue;
  email?: string | null;
  feedbacks?: FeedbackCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  phoneNumber?: string | null;
  roles: InputJsonValue;
  tryOnSessions?: TryOnSessionCreateNestedManyWithoutUsersInput;
  username: string;
};
