import { useState } from "react";
import GameLogic from "./gameLogic";
import { useEffect } from "react";

const useGame = () => {
  const [gameLogic] = useState(() => new GameLogic(2));
  const [gameState, setGameState] = useState(null);

  useEffect(() => {
    gameLogic.subscribe(setGameState);
    return () => gameLogic.unsubscribe(setGameState);
  }, [gameLogic]);

  return {
    gameState,
    clickCard: (card) => gameLogic.clickCard(card),
    getCards: () => gameLogic.getCards(),
  };
};

export default useGame;
