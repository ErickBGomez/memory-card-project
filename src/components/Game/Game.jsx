import { useEffect } from "react";
import useGame from "../../hooks/useGame";
import Board from "../Board/Board";
import Score from "../Score/Score";

const Game = () => {
  const { gameState, clickCard, startNewGame } = useGame();

  const { isGameOver } = gameState || {};

  useEffect(() => {
    startNewGame(0);
  }, []);

  const restartGame = () => {
    startNewGame(0);
  };

  return (
    <div className="game">
      <Score gameState={gameState} />
      <Board gameState={gameState} clickCard={clickCard} />
      {isGameOver && (
        <div className="game-over">
          <div className="text-white text-2xl">Game Over!</div>
          <button onClick={restartGame}>Play again</button>
        </div>
      )}
    </div>
  );
};

export default Game;
