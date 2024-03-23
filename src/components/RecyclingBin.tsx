import { FC } from "react";
import { RecyclingBinName } from "../types";
import Droppable from "./Droppable";

interface RecyclingBinProps {
  id: string;
  name: RecyclingBinName;
  items: JSX.Element[];
}

const RecyclingBin: FC<RecyclingBinProps> = ({ id, name, items }) => {
  return (
    <Droppable key={id} id={id}>
      {items.length !== 0 ? items : `Contentor ${name}`}
    </Droppable>
  );
};

export default RecyclingBin;
