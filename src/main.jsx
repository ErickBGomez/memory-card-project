import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import GameSettingsProvider from "./providers/GameSettingsProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameSettingsProvider>
      <App />
    </GameSettingsProvider>
  </StrictMode>
);
