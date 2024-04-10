import { FC } from "react";
import { Garbage } from "../types";
import Draggable from "./Draggable";

interface NotSortedGarbageProps {
  items: Garbage[];
}

const NotSortedGarbage: FC<NotSortedGarbageProps> = ({ items }) => {
  return (
    <>
      <p className="text-4xl">Sabes Reciclar?</p>
      <div className="flex justify-center items-center">
        {items.map(({ id, displaynName, img }) => (
          <Draggable id={id} img={img}>
            {displaynName}
          </Draggable>
        ))}
      </div>
    </>
  );
};
export default NotSortedGarbage;
