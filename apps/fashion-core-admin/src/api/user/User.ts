import { JsonValue } from "type-fest";
import { Feedback } from "../feedback/Feedback";
import { TryOnSession } from "../tryOnSession/TryOnSession";

export type User = {
  avatar: JsonValue;
  createdAt: Date;
  email: string | null;
  feedbacks?: Array<Feedback>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  roles: JsonValue;
  tryOnSessions?: Array<TryOnSession>;
  updatedAt: Date;
  username: string;
};
