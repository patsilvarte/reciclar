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
      style={style}
      {...listeners}
      {...attributes}
      className="border-white border-2 rounded px-2 py-1"
    >
      {children}
    </button>
  );
};
export default Draggable;
