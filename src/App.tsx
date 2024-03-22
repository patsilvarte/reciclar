import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RecyclingArea from "./components/RecyclingArea";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="text-4xl">Sabes Reciclar?</p>
        <img src={logo} className="App-logo" alt="logo" />

        <RecyclingArea />
      </header>
    </div>
  );
}

export default App;
