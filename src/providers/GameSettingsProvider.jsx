import GameSettingsContext from "../contexts/GameSettingsContext";
import PropTypes from "prop-types";
import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect, useState } from "react";

const GameSettingsProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState(-1);
  const { setItem, getItem } = useLocalStorage();
  const [showTutorial, setShowTutorial] = useState(
    getItem("showTutorial") ?? true
  );

  useEffect(() => {
    setItem("showTutorial", showTutorial);
  }, [showTutorial, setItem]);

  return (
    <GameSettingsContext.Provider
      value={{
        difficulty,
        setDifficulty,
        showTutorial,
        setShowTutorial,
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
