import { DragEndEvent, DndContext } from "@dnd-kit/core";
import { useMemo, useState } from "react";
import { Bin, LocationsSet, Item, ItemsIds, BinIds } from "../types";
import { generateMarkupsSet, getItemsPerSection } from "../utils";
import RecyclingBin from "./RecyclingBin";

const bins: Bin[] = [
  { name: "Amarelo", id: "yellow" },
  { name: "Azul", id: "blue" },
  { name: "Verde", id: "green" },
];
const ids: ItemsIds[] = ["garrafa", "folha-papel", "caixa-cartão"];
const initLocation: LocationsSet = {
  empty: ids,
  yellow: [],
  blue: [],
  green: [],
};

const RecyclingArea = () => {
  // value savers for location and render of draggable items
  const [draggableLocation, setDraggableLocation] =
    useState<LocationsSet>(initLocation);

  // initialize draggable items
  const draggableMarkupsSet: Item[] = useMemo(
    () => generateMarkupsSet(ids),
    []
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    const target = active.id as ItemsIds;

    // copy object to avaid state mutation
    const originalLocation = { ...draggableLocation };
    // remove from previous section
    const newLocations: LocationsSet = {
      empty: originalLocation.empty.filter((item) => item !== target),
      yellow: originalLocation.yellow.filter((item) => item !== target),
      blue: originalLocation.blue.filter((item) => item !== target),
      green: originalLocation.green.filter((item) => item !== target),
    };

    // add to new position
    if (over) {
      const section = over.id as BinIds;
      newLocations[section].push(target);
    } else {
      newLocations.empty.push(target);
    }
    setDraggableLocation(newLocations);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <>
        {getItemsPerSection(draggableMarkupsSet, draggableLocation.empty)}
        <div className="border-white border-2 rounded flex justify-center items-center p-2">
          {bins.map(({ id, name }) => (
            <RecyclingBin
              id={id}
              name={name}
              items={getItemsPerSection(
                draggableMarkupsSet,
                draggableLocation[id]
              )}
            />
          ))}
        </div>
      </>
    </DndContext>
  );
};

export default RecyclingArea;
