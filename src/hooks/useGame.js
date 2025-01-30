import { useState } from "react";
import GameLogic from "./gameLogic";
import { useEffect } from "react";

const useGame = (difficulty = 0) => {
  const [gameLogic] = useState(() => new GameLogic(difficulty));
  const [gameState, setGameState] = useState(null);

  useEffect(() => {
    gameLogic.subscribe(setGameState);
    return () => gameLogic.unsubscribe(setGameState);
  }, [gameLogic]);

  return {
    gameState,
    clickCard: (card) => gameLogic.clickCard(card),
    startNewGame: (difficulty) => gameLogic.startNewGame(difficulty),
  };
};

export default useGame;
