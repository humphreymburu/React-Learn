import React from "react";
import "./styles.css";
import Listz from "./Listz";

export default function App() {
  const numbers = [1, 2, 3, 4, 5, 8];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Listz numbers={numbers} />
    </div>
  );
}
