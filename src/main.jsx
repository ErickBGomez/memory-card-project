import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// TODO: Add tailwindcss

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
