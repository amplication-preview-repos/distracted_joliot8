import { OutfitWhereUniqueInput } from "../outfit/OutfitWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TryOnSessionUpdateInput = {
  feedback?: string | null;
  outfit?: OutfitWhereUniqueInput | null;
  tryOnDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
