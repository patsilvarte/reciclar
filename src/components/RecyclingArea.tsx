import { DragEndEvent, DndContext } from "@dnd-kit/core";
import { useEffect, useState, useMemo } from "react";
import { LocationsSet, BinIds, Garbage } from "../types";
import { areAllItemsOnRightSpot, getItemsPerSection } from "../utils";
import NotSortedGarbage from "./NotSortedGarbage";
import Street from "./Street";

const garbage: Garbage[] = [
  { id: "garrafa-agua", displaynName: "Garrafa de água", rightBin: "yellow" },
  { id: "lata-atum", displaynName: "Lata de Atum", rightBin: "yellow" },
  { id: "garrafa-vinho", displaynName: "Garrafa de vinho", rightBin: "green" },
  { id: "perfume", displaynName: "Frasco de Perfume", rightBin: "green" },
  { id: "caixa", displaynName: "Caixa de Cartão", rightBin: "blue" },
  { id: "folha", displaynName: "folha de papel", rightBin: "blue" },
];
const initLocation: LocationsSet = {
  empty: [],
  yellow: [],
  blue: [],
  green: [],
};

const RecyclingArea = () => {
  // value savers for location and render of draggable items
  const [draggableLocation, setDraggableLocation] =
    useState<LocationsSet>(initLocation);

  useEffect(() => {
    let baseLocations = { ...initLocation };
    garbage.forEach((item) => {
      baseLocations.empty.push(item.id);
    });
    setDraggableLocation(baseLocations);
  }, []);

  const isFinished = useMemo(
    () => areAllItemsOnRightSpot(draggableLocation, garbage),
    [draggableLocation]
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    const target = active.id as string;

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
        {isFinished && (
          <>
            <p>Parabéns!</p>
            <p>Conseguiste colocar todo o lixo no seu sítio.</p>
          </>
        )}
        <NotSortedGarbage
          items={getItemsPerSection(garbage, draggableLocation.empty)}
        />
        <Street garbage={garbage} draggableLocation={draggableLocation} />
      </>
    </DndContext>
  );
};

export default RecyclingArea;
