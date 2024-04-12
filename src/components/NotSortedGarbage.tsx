import { FC } from "react";
import { Garbage } from "../types";
import Draggable from "./Draggable";

interface NotSortedGarbageProps {
  items: Garbage[];
  next: () => void;
  level: number;
  isRight: boolean;
}

const NotSortedGarbage: FC<NotSortedGarbageProps> = ({
  items,
  level,
  next,
  isRight,
}) => {
  return (
    <>
      <p className="text-4xl">Sabes Reciclar?</p>
      <p className="text-4xl">Nível {level}</p>
      {items.length !== 0 || !isRight ? (
        <div className="flex justify-center items-center flex-wrap">
          {items.map(({ id, displaynName, img }) => (
            <Draggable id={id} img={img}>
              {displaynName}
            </Draggable>
          ))}
        </div>
      ) : (
        <button onClick={next}>Próximo nível</button>
      )}
    </>
  );
};
export default NotSortedGarbage;
