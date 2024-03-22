import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { DndContext, DragEndEvent, UniqueIdentifier } from "@dnd-kit/core";
import Droppable from "./components/Droppable";
import Draggable from "./components/Draggable";

function App() {
  const containers = ["A", "B", "C"];
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);
  const draggableMarkup = <Draggable id="draggable">Drag me</Draggable>;

  const handleDragEnd = (event: DragEndEvent) => {
    const { over } = event;
    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="App">
        <header className="App-header">
          <p className="text-4xl">Can you recycle?</p>
          <img src={logo} className="App-logo" alt="logo" />
          {parent === null ? draggableMarkup : null}

          {containers.map((id) => (
            <Droppable key={id} id={id}>
              {parent === id ? draggableMarkup : `Container ${id}`}
            </Droppable>
          ))}
        </header>
      </div>
    </DndContext>
  );
}

export default App;
