import React from "react";
import "./App.css";
import RecyclingArea from "./components/RecyclingArea";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="text-4xl">Sabes Reciclar?</p>
        <RecyclingArea />
      </header>
    </div>
  );
}

export default App;
