import { useState } from "react";
import Game from "./components/Game/Game";
import MainMenu from "./components/MainMenu/MainMenu";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <>{gameStarted ? <Game /> : <MainMenu onGameStarted={setGameStarted} />}</>
  );
};

export default App;
