import { InputJsonValue } from "../../types";
import { TryOnSessionCreateNestedManyWithoutOutfitsInput } from "./TryOnSessionCreateNestedManyWithoutOutfitsInput";

export type OutfitCreateInput = {
  category?: string | null;
  description?: string | null;
  imageUrl?: InputJsonValue;
  name?: string | null;
  price?: number | null;
  tryOnSessions?: TryOnSessionCreateNestedManyWithoutOutfitsInput;
};
