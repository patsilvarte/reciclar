import { FC } from "react";
import { Garbage, RecyclingBinName } from "../types";
import Draggable from "./Draggable";
import Droppable from "./Droppable";

interface RecyclingBinProps {
  id: string;
  name: RecyclingBinName;
  items: Garbage[];
  img: string;
}

const RecyclingBin: FC<RecyclingBinProps> = ({ id, name, items, img }) => {
  return (
    <div className="relative w-1/3 h-96">
      <img
        src={img}
        alt={`${name} bin`}
        className="absolute w-full h-full object-contain"
      />
      <Droppable key={id} id={id}>
        <div className="w-full h-full flex justify-center items-center">
          {items.length === 0 && `Contentor ${name}`}
          {items.map(({ id: itemId, displaynName, rightBin }) => (
            <Draggable id={itemId} color={rightBin === id ? "green" : "red"}>
              {displaynName}
            </Draggable>
          ))}
        </div>
      </Droppable>
    </div>
  );
};

export default RecyclingBin;
