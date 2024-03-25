import { FC } from "react";
import { Garbage, RecyclingBinName } from "../types";
import Draggable from "./Draggable";
import Droppable from "./Droppable";

interface RecyclingBinProps {
  id: string;
  name: RecyclingBinName;
  items: Garbage[];
}

const RecyclingBin: FC<RecyclingBinProps> = ({ id, name, items }) => {
  return (
    <Droppable key={id} id={id}>
      {items.length === 0 && `Contentor ${name}`}
      {items.map(({ id: itemId, displaynName, rightBin }) => (
        <Draggable id={itemId} color={rightBin === id ? "green" : "red"}>
          {displaynName}
        </Draggable>
      ))}
    </Droppable>
  );
};

export default RecyclingBin;
