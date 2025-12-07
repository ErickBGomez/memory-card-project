import GameSettingsContext from "../contexts/GameSettingsContext";
import PropTypes from "prop-types";
import useLocalStorage from "../hooks/useLocalStorage";
import { useState } from "react";

const GameSettingsProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState(-1);
  const { setItem, getItem } = useLocalStorage();

  const getTutorialPreference = () => getItem("showTutorial") ?? true;

  const setTutorialPreference = (showTutorial) => {
    setItem("showTutorial", showTutorial);
  };

  return (
    <GameSettingsContext.Provider
      value={{
        difficulty,
        setDifficulty,
        getTutorialPreference,
        setTutorialPreference,
      }}
    >
      {children}
    </GameSettingsContext.Provider>
  );
};

GameSettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GameSettingsProvider;
