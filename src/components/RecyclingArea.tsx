import { DragEndEvent, DndContext } from "@dnd-kit/core";
import { useEffect, useState, useMemo } from "react";
import { LocationsSet, BinIds } from "../types";
import { areAllItemsOnRightSpot } from "../utils";
import Street from "./Street";
import RecyclingBin from "./RecyclingBin";
import { getItemsPerSection } from "../utils";

import NotSortedGarbage from "./NotSortedGarbage";
import ChallangeCompleted from "./ChallangeCompleted";
import Sky from "./Sky";
import useLevels from "../useLevels";

const initLocation: LocationsSet = {
  empty: [],
  yellow: [],
  blue: [],
  green: [],
};

const RecyclingArea = () => {
  const { bins, garbage, hasNext, next, level } = useLevels();
  // value savers for location and render of draggable items
  const [draggableLocation, setDraggableLocation] =
    useState<LocationsSet>(initLocation);

  useEffect(() => {
    let baseLocations = { ...initLocation };
    garbage.forEach((item) => {
      baseLocations.empty.push(item.id);
    });
    setDraggableLocation(baseLocations);
  }, [garbage]);

  const levelCompleted = useMemo(
    () => areAllItemsOnRightSpot(draggableLocation, garbage),
    [draggableLocation, garbage]
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
      <div className="flex w-screen h-screen flex-col">
        <Sky>
          {levelCompleted && !hasNext ? (
            <ChallangeCompleted />
          ) : (
            <NotSortedGarbage
              items={getItemsPerSection(garbage, draggableLocation.empty)}
              next={next}
              level={level}
              isRight={levelCompleted}
            />
          )}
        </Sky>
        <Street garbage={garbage} draggableLocation={draggableLocation}>
          <div className="w-4/5 flex justify-around gap-4 items-center">
            {bins.map(({ id, name, img }) => (
              <RecyclingBin
                id={id}
                img={img}
                name={name}
                items={getItemsPerSection(garbage, draggableLocation[id])}
              />
            ))}
          </div>
        </Street>
      </div>
    </DndContext>
  );
};

export default RecyclingArea;
