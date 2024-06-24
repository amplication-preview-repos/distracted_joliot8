import { OutfitWhereInput } from "./OutfitWhereInput";
import { OutfitOrderByInput } from "./OutfitOrderByInput";

export type OutfitFindManyArgs = {
  where?: OutfitWhereInput;
  orderBy?: Array<OutfitOrderByInput>;
  skip?: number;
  take?: number;
};
