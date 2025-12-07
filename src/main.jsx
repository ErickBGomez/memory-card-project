import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import GameSettingsProvider from "./providers/GameSettingsProvider.jsx";
import FloatingTextProvider from "./providers/FloatingTextProvider.jsx";
import FloatingTextContainer from "./components/FloatingTextContainer/FloatingTextContainer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameSettingsProvider>
      <FloatingTextProvider>
        <FloatingTextContainer>
          <App />
        </FloatingTextContainer>
      </FloatingTextProvider>
    </GameSettingsProvider>
  </StrictMode>
);
