import { useState } from "react";
import Game from "./components/Game/Game";
import MainMenu from "./components/MainMenu/MainMenu";

// TODO: Add animations
// TODO: Create API

const App = () => {
  const [difficulty, setDifficulty] = useState(-1);

  return (
    <>
      {difficulty >= 0 ? (
        <Game difficulty={difficulty} setDifficulty={setDifficulty} />
      ) : (
        <MainMenu setDifficulty={setDifficulty} />
      )}
    </>
  );
};

export default App;
