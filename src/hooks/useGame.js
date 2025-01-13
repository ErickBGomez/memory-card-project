import { useState } from "react";
import GameLogic from "./gameLogic";
import { useEffect } from "react";

const useGame = () => {
  const [gameLogic] = useState(() => new GameLogic());
  const [gameState, setGameState] = useState(null);

  useEffect(() => {
    gameLogic.subscribe(setGameState);
    return () => gameLogic.unsubscribe(setGameState);
  }, [gameLogic]);

  return {
    gameState,
    clickCard: (icon) => gameLogic.clickCard(icon),
  };
};

export default useGame;
