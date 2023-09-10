import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import Routes from "./Routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
