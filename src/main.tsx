//* 🔹 Default Imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//* --------------------------------------

//* 🔹 Library Imports
import "modern-normalize";
//* --------------------------------------

//* 🔹 Components
import App from "./components/App/App";
//* --------------------------------------

//! 🔹 Render
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
//! --------------------------------------
