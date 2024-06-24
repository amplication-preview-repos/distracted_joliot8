import { TryOnSession as TTryOnSession } from "../api/tryOnSession/TryOnSession";

export const TRYONSESSION_TITLE_FIELD = "id";

export const TryOnSessionTitle = (record: TTryOnSession): string => {
  return record.id?.toString() || String(record.id);
};
