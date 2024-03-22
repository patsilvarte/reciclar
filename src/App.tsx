import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import Droppable from "./components/Droppable";
import Draggable from "./components/Draggable";

function App() {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <Draggable>Drag me</Draggable>;

  const handleDragEnd = (event: DragEndEvent) => {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="App">
        <header className="App-header">
          <p className="text-4xl">Can you recycle?</p>
          <img src={logo} className="App-logo" alt="logo" />
          {!isDropped ? draggableMarkup : null}
          <Droppable>{isDropped ? draggableMarkup : "Drop here"}</Droppable>
        </header>
      </div>
    </DndContext>
  );
}

export default App;
