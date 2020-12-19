import React from "react";
import "./styles.css";
import Form from "./Form.js";

export default function App() {
  return (
    <div className="App">
      <Form />
      <span id="footer">
        <a href="https://github.com/amdawgs/New-Project" target="_blank" rel="noreferrer">
          Open source code{" "}
        </a>
        by Amanda Davenport
      </span>
    </div>
  );
}
