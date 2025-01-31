import { useState } from "react";
import Game from "./components/Game/Game";
import MainMenu from "./components/MainMenu/MainMenu";

// TODO: Select new difficulty after game over, without creating a new game instance
// TODO: Convert useGame hook into context
// TODO: Add animations
// TODO: Create API

const App = () => {
  const [difficulty, setDifficulty] = useState(-1);

  return (
    <>
      {difficulty >= 0 ? (
        <Game difficulty={difficulty} />
      ) : (
        <MainMenu setDifficulty={setDifficulty} />
      )}
    </>
  );
};

export default App;
