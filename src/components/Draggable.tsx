import React, { FC, ReactNode } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import itemRight from "../assets/item_right.png";
import itemWrong from "../assets/item_wrong.png";

interface DraggableProps {
  children?: ReactNode;
  id: string;
  isPlacedRight?: boolean;
  insideBin?: boolean;
}

const Draggable: FC<DraggableProps> = ({
  id,
  children,
  isPlacedRight,
  insideBin = false,
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const styleButton = transform
    ? { transform: CSS.Translate.toString(transform), zIndex: 3 }
    : {};
  const styleItem =
    transform || !insideBin
      ? {
          borderColor: "white",
          color: "white",
          // background-image
        }
      : {
          borderColor: isPlacedRight ? "green" : "red",
          color: isPlacedRight ? "green" : "red",
          // background-image
        };

  return (
    <button
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={styleButton}
      className="flex justify-center items-center flex-col m-4"
    >
      <div
        style={styleItem}
        className="border-white border-2 rounded px-2 py-1 h-20 w-20 rounded-full flex justify-center items-center"
      >
        {!transform &&
          insideBin &&
          (isPlacedRight ? (
            <img src={itemRight} alt="right" className="w-3/4" />
          ) : (
            <img src={itemWrong} alt="wrong" className="w-3/4" />
          ))}
      </div>
      <p style={styleItem} className="text-base ">
        {children}
      </p>
    </button>
  );
};
export default Draggable;
