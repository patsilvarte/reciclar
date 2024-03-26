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
  const style = transform
    ? {
        borderColor: "white",
        color: "white",
        // transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transform: CSS.Translate.toString(transform),
      }
    : { borderColor: color };

  return (
    <button
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="flex justify-center items-center flex-col m-4"
    >
      <div
        style={style}
        className="border-white border-2 rounded px-2 py-1 h-20 w-20 rounded-full"
      ></div>
      <p className="text-base ">{children}</p>
    </button>
  );
};
export default Draggable;
