import { useEffect } from "react";
import useGame from "../../hooks/useGame";
import Board from "../Board/Board";
import Score from "../Score/Score";

const Game = ({ difficulty }) => {
  const { gameState, clickCard, startNewGame } = useGame(difficulty);

  const { isGameOver } = gameState || {};

  useEffect(() => {
    startNewGame(difficulty);
  }, [startNewGame, difficulty]);

  const restartGame = () => {
    startNewGame(difficulty);
  };

  return (
    <div className="game">
      <Score gameState={gameState} />
      <Board gameState={gameState} clickCard={clickCard} />
      {isGameOver && (
        <div className="game-over flex flex-col gap-2 mt-4">
          <div className="text-white text-2xl text-center">GAME OVER!</div>
          <button className="primary" onClick={restartGame}>
            PLAY AGAIN
          </button>
          <button className="secondary" onClick={restartGame}>
            RETURN MAIN MENU
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
