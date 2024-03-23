import Draggable from "./components/Draggable";
import { Item, ItemsIds } from "./types";

export const generateMarkupsSet = (ids: ItemsIds[]): Item[] => {
  return ids.map((id) => {
    const draggableMarkup = <Draggable id={id}>{id}</Draggable>;
    return { item: draggableMarkup, id };
  });
};

export const getItemsPerSection = (
  allItems: Item[],
  itemsSection: ItemsIds[]
) => {
  const items: JSX.Element[] = [];
  itemsSection.forEach((itemId) => {
    const item = allItems.find((item) => item.id === itemId)?.item;
    if (item) {
      items.push(item);
    }
  });
  return items;
};
