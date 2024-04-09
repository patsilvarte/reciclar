import yellowBin from "../assets/yellow_bin.png";
import blueBin from "../assets/blue_bin.png";
import greenBin from "../assets/green_bin.png";
import street from "../assets/street.jpg";
import { Bin, Garbage, LocationsSet } from "../types";
import RecyclingBin from "./RecyclingBin";
import { getItemsPerSection } from "../utils";
import { FC } from "react";

const bins: Bin[] = [
  { name: "Amarelo", id: "yellow", img: yellowBin },
  { name: "Azul", id: "blue", img: blueBin },
  { name: "Verde", id: "green", img: greenBin },
];

interface StreetProps {
  garbage: Garbage[];
  draggableLocation: LocationsSet;
}

const Street: FC<StreetProps> = ({ garbage, draggableLocation }) => {
  return (
    <div className="flex justify-center w-screen absolute bottom-0">
      <div
        style={{
          background: `url(${street})`,
          backgroundRepeat: "round",
        }}
        className="absolute bottom-0 w-full h-1/3"
      />

      <div className=" w-4/5 flex justify-around gap-4  items-center">
        {bins.map(({ id, name, img }) => (
          <RecyclingBin
            id={id}
            img={img}
            name={name}
            items={getItemsPerSection(garbage, draggableLocation[id])}
          />
        ))}
      </div>
    </div>
  );
};

export default Street;
