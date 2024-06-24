import { TryOnSessionWhereInput } from "./TryOnSessionWhereInput";
import { TryOnSessionOrderByInput } from "./TryOnSessionOrderByInput";

export type TryOnSessionFindManyArgs = {
  where?: TryOnSessionWhereInput;
  orderBy?: Array<TryOnSessionOrderByInput>;
  skip?: number;
  take?: number;
};
