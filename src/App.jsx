import { useContext } from "react";
import Game from "./components/Game/Game";
import MainMenu from "./components/MainMenu/MainMenu";
import GameSettingsContext from "./contexts/GameSettingsContext";

const App = () => {
  const { difficulty, setDifficulty } = useContext(GameSettingsContext);

  return (
    <>
      {difficulty >= 0 ? (
        <Game difficulty={difficulty} returnMenu={setDifficulty} />
      ) : (
        <MainMenu setDifficulty={setDifficulty} />
      )}
    </>
  );
};

export default App;
