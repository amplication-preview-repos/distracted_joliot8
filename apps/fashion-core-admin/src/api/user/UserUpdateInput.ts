import { InputJsonValue } from "../../types";
import { FeedbackUpdateManyWithoutUsersInput } from "./FeedbackUpdateManyWithoutUsersInput";
import { TryOnSessionUpdateManyWithoutUsersInput } from "./TryOnSessionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  avatar?: InputJsonValue;
  email?: string | null;
  feedbacks?: FeedbackUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  phoneNumber?: string | null;
  roles?: InputJsonValue;
  tryOnSessions?: TryOnSessionUpdateManyWithoutUsersInput;
  username?: string;
};
