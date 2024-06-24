import { SortOrder } from "../../util/SortOrder";

export type TryOnSessionOrderByInput = {
  createdAt?: SortOrder;
  feedback?: SortOrder;
  id?: SortOrder;
  outfitId?: SortOrder;
  tryOnDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
