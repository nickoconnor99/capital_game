import { useState } from "react";
import "./App.css";
import CountryCapitalGame from "./components/CountryCapitalGame";

function App() {
  return (
    <CountryCapitalGame
      data={{ Germany: "Berlin", Azerbaijan: "Baku" }}
    ></CountryCapitalGame>
  );
}

export default App;
