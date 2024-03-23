import React, { FC, ReactNode } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface DraggableProps {
  children?: ReactNode;
  id: string;
}

const Draggable: FC<DraggableProps> = (props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = transform
    ? {
        color: "white",
        // transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transform: CSS.Translate.toString(transform),
      }
    : { color: "white" };

  return (
    <button
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="border-white border-2 rounded px-2 py-1"
    >
      {props.children}
    </button>
  );
};
export default Draggable;
