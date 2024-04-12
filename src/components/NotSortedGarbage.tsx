import { FC } from "react";
import { Garbage } from "../types";
import Draggable from "./Draggable";

interface NotSortedGarbageProps {
  items: Garbage[];
  level: number;
}

const NotSortedGarbage: FC<NotSortedGarbageProps> = ({ items, level }) => {
  return (
    <>
      <p className="text-4xl">Sabes Reciclar?</p>
      <p className="text-4xl">Nível {level}</p>
      <div className="flex justify-center items-center flex-wrap">
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
