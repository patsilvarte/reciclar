import React, { FC, ReactNode } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface DraggableProps {
  children?: ReactNode;
  id: string;
  color?: string;
}

const Draggable: FC<DraggableProps> = ({ id, children, color = "white" }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const styleButton = transform
    ? { transform: CSS.Translate.toString(transform) }
    : {};
  const styleItem = transform
    ? {
        borderColor: "white",
        color: "white",
      }
    : { borderColor: color, color: color };

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
        className="border-white border-2 rounded px-2 py-1 h-20 w-20 rounded-full"
      ></div>
      <p style={styleItem} className="text-base ">
        {children}
      </p>
    </button>
  );
};
export default Draggable;
