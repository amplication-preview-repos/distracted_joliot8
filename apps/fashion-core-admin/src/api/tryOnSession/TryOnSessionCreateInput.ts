import { OutfitWhereUniqueInput } from "../outfit/OutfitWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TryOnSessionCreateInput = {
  feedback?: string | null;
  outfit?: OutfitWhereUniqueInput | null;
  tryOnDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
