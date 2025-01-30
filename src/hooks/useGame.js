import { useCallback, useState } from "react";
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
    // Callback to avoid infinite loop
    startNewGame: useCallback(
      (difficulty) => gameLogic.startNewGame(difficulty),
      [gameLogic]
    ),
  };
};

export default useGame;
