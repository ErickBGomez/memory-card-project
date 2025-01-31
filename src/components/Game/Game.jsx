import { useEffect } from "react";
import useGame from "../../hooks/useGame";
import Board from "../Board/Board";
import Score from "../Score/Score";

const Game = () => {
  const { gameState, clickCard, startNewGame } = useGame();

  const { isGameOver } = gameState || {};

  useEffect(() => {
    startNewGame(0);
  }, [startNewGame]);

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
          <button className="primary" onClick={restartGame}>
            PLAY AGAIN
          </button>
          <button className="secondary" onClick={restartGame}>
            CHANGE DIFFICULTY
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
