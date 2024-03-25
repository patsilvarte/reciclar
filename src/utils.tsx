import { Garbage } from "./types";

export const getItemsPerSection = (
  allItems: Garbage[],
  itemsSection: string[]
) => {
  return allItems.filter((item) => itemsSection.includes(item.id));
};
