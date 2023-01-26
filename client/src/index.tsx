import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./components/App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <BrowserRouter basename="/spotify-2.0">
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
