import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Form from "./Form.js";

export default function App() {
  return (
    <div className="App">
      <Form />
      <span id="footer">
        <a href="https://github.com/amdawgs/New-Project" target="_blank">
          Open source code{" "}
        </a>
        by Amanda Davenport
      </span>
    </div>
  );
}
