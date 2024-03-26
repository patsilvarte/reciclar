import { FC } from "react";
import { Garbage } from "../types";
import Draggable from "./Draggable";

interface NotSortedGarbageProps {
  items: Garbage[];
}

const NotSortedGarbage: FC<NotSortedGarbageProps> = ({ items }) => {
  return (
    <div className="flex justify-center items-center">
      {items.map(({ id, displaynName }) => (
        <Draggable id={id}>{displaynName}</Draggable>
      ))}
    </div>
  );
};
export default NotSortedGarbage;
