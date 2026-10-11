// ENTRY POINT — the first file that runs.
// It finds <div id="root"> in index.html and draws our <App /> inside it.
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
