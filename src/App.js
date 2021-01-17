import React from "react";
import "./styles.css";
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Tokyo"/>
      <span id="footer">
        <a href="https://github.com/amdawgs/New-Project" target="_blank" rel="noreferrer">
          Open source code{" "}
        </a>
        by Amanda Davenport
      </span>
      </div>
    </div>
  );
}
