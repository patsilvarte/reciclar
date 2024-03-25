import { FC } from "react";
import { Garbage } from "../types";
import Draggable from "./Draggable";

interface NotSortedGarbageProps {
  items: Garbage[];
}

const NotSortedGarbage: FC<NotSortedGarbageProps> = ({ items }) => {
  return (
    <>
      {items.map(({ id, displaynName }) => (
        <Draggable id={id}>{displaynName}</Draggable>
      ))}
    </>
  );
};
export default NotSortedGarbage;
