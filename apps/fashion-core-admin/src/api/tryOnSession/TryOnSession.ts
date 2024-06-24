import { Outfit } from "../outfit/Outfit";
import { User } from "../user/User";

export type TryOnSession = {
  createdAt: Date;
  feedback: string | null;
  id: string;
  outfit?: Outfit | null;
  tryOnDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
