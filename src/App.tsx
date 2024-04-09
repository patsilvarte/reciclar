import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import RecyclingArea from "./components/RecyclingArea";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RecyclingArea />
      </header>
      <Footer />
    </div>
  );
}

export default App;
