import { InputJsonValue } from "../../types";
import { TryOnSessionUpdateManyWithoutOutfitsInput } from "./TryOnSessionUpdateManyWithoutOutfitsInput";

export type OutfitUpdateInput = {
  category?: string | null;
  description?: string | null;
  imageUrl?: InputJsonValue;
  name?: string | null;
  price?: number | null;
  tryOnSessions?: TryOnSessionUpdateManyWithoutOutfitsInput;
};
