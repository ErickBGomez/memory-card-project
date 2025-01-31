import { useState } from "react";
import Game from "./components/Game/Game";
import MainMenu from "./components/MainMenu/MainMenu";

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
