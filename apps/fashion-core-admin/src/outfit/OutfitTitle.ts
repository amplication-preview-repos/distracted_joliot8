import { Outfit as TOutfit } from "../api/outfit/Outfit";

export const OUTFIT_TITLE_FIELD = "name";

export const OutfitTitle = (record: TOutfit): string => {
  return record.name?.toString() || String(record.id);
};
