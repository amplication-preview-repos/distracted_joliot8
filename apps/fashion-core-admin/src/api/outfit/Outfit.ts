import { JsonValue } from "type-fest";
import { TryOnSession } from "../tryOnSession/TryOnSession";

export type Outfit = {
  category: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  imageUrl: JsonValue;
  name: string | null;
  price: number | null;
  tryOnSessions?: Array<TryOnSession>;
  updatedAt: Date;
};
