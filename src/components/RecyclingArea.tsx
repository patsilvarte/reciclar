import { DragEndEvent, DndContext } from "@dnd-kit/core";
import { useEffect, useState, useMemo } from "react";
import { LocationsSet, BinIds, Garbage, Bin } from "../types";
import { areAllItemsOnRightSpot } from "../utils";
import Street from "./Street";
import RecyclingBin from "./RecyclingBin";
import { getItemsPerSection } from "../utils";
import yellowBin from "../assets/yellow_bin.png";
import blueBin from "../assets/blue_bin.png";
import greenBin from "../assets/green_bin.png";
import caixaCartao from "../assets/garbage/caixa_cartao.png";
import garrafaAgua from "../assets/garbage/garrafa_agua.png";
import lataSumo from "../assets/garbage/lata_sumo.png";
import garrafaVidro from "../assets/garbage/garrafa_vidro.png";
import folhaPapel from "../assets/garbage/folha_papel.png";
import NotSortedGarbage from "./NotSortedGarbage";
import ChallangeCompleted from "./ChallangeCompleted";
import Sky from "./Sky";

const bins: Bin[] = [
  { name: "Amarelo", id: "yellow", img: yellowBin },
  { name: "Azul", id: "blue", img: blueBin },
  { name: "Verde", id: "green", img: greenBin },
];
const garbage: Garbage[] = [
  {
    id: "garrafa-agua",
    displaynName: "Garrafa de água",
    rightBin: "yellow",
    img: garrafaAgua,
  },
  {
    id: "lata-bebida",
    displaynName: "Lata de sumo",
    rightBin: "yellow",
    img: lataSumo,
  },
  {
    id: "garrafa-vidro",
    displaynName: "Garrafa de vidro",
    rightBin: "green",
    img: garrafaVidro,
  },
  {
    id: "perfume",
    displaynName: "Frasco de Perfume",
    rightBin: "green",
    img: caixaCartao,
  },
  {
    id: "caixa",
    displaynName: "Caixa de Cartão",
    rightBin: "blue",
    img: caixaCartao,
  },
  {
    id: "folha",
    displaynName: "folha de papel",
    rightBin: "blue",
    img: folhaPapel,
  },
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
      <div className="flex w-screen h-screen flex-col">
        <Sky>
          {isFinished ? (
            <ChallangeCompleted />
          ) : (
            <NotSortedGarbage
              items={getItemsPerSection(garbage, draggableLocation.empty)}
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
