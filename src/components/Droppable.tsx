import React, { FC, ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";

interface DroppableProps {
  children?: ReactNode;
  id: string;
}

const Droppable: FC<DroppableProps> = (props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    borderColor: isOver ? "green" : undefined,
    color: isOver ? "green" : undefined,
    height: "200px",
    width: "200px",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="border-white border-2 rounded flex justify-center items-center"
    >
      {props.children}
    </div>
  );
};

export default Droppable;
