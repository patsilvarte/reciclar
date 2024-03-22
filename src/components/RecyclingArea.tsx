import { UniqueIdentifier, DragEndEvent, DndContext } from "@dnd-kit/core";
import { useState } from "react";
import Draggable from "./Draggable";
import RecyclingBin from "./RecyclingBin";

export type RecyclingBinName = "Amarelo" | "Azul" | "Verde";
type BinIds = "empty" | "yellow" | "blue" | "green";
type ItemsIds = "garrafa" | "folha-papel" | "caixa-cartão";

type Bin = {
  name: RecyclingBinName;
  id: BinIds;
};
type LocationsSet = Record<BinIds, ItemsIds[]>;
type Item = {
  id: ItemsIds;
  item: JSX.Element;
};

const bins: Bin[] = [
  { name: "Amarelo", id: "yellow" },
  { name: "Azul", id: "blue" },
  { name: "Verde", id: "green" },
];

const RecyclingArea = () => {
  // draggable items
  const draggableMarkup1 = <Draggable id="garrafa">Garrafa</Draggable>;

  // pars parent - items
  const initLocation: LocationsSet = {
    empty: ["garrafa"],
    yellow: [],
    blue: [],
    green: [],
  };
  const draggableMarkupsSet: Item[] = [
    { item: draggableMarkup1, id: "garrafa" },
  ];

  // value savers for location and render of draggable items
  const [draggableLocation, setDraggableLocation] =
    useState<LocationsSet>(initLocation);

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    const target = active.id as ItemsIds;

    // remove from previous place
    const newLocations: LocationsSet = {
      empty: draggableLocation.empty.filter((item) => item !== target),
      yellow: draggableLocation.yellow.filter((item) => item !== target),
      blue: draggableLocation.blue.filter((item) => item !== target),
      green: draggableLocation.green.filter((item) => item !== target),
    };

    // add to new position
    if (over) {
      const section = over.id as BinIds;
      setDraggableLocation({
        ...newLocations,
        [section]: [...newLocations[section], target],
      });
    } else {
      setDraggableLocation({
        ...newLocations,
        empty: [...draggableLocation.empty, target],
      });
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <>
        {draggableLocation.empty.map((itemId) => {
          return draggableMarkupsSet.find((item) => item.id === itemId)?.item;
        })}
        <div className="border-white border-2 rounded flex justify-center items-center p-2">
          {bins.map(({ id, name }) => (
            <RecyclingBin
              id={id}
              name={name}
              items={draggableLocation[id].map((itemId) => {
                const element = draggableMarkupsSet.find(
                  (item) => item.id === itemId
                );
                return element?.item || <></>;
              })}
            />
          ))}
        </div>
      </>
    </DndContext>
  );
};

export default RecyclingArea;
