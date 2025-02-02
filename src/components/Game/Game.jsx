import { useEffect } from "react";
import useGame from "../../hooks/useGame";
import Board from "../Board/Board";
import Score from "../Score/Score";

const Game = ({ difficulty, returnMenu }) => {
  const { gameState, clickCard, startNewGame } = useGame();

  const { isGameOver } = gameState || {};

  useEffect(() => {
    startNewGame(difficulty);
  }, [startNewGame, difficulty]);

  const restartGame = () => {
    startNewGame(difficulty);
  };

  const returnMainMenu = () => {
    returnMenu(-1);
  };

  return (
    <div className="game max-w-[400px] w-full flex flex-col gap-4">
      <Score gameState={gameState} />
      {!isGameOver ? (
        <Board gameState={gameState} clickCard={clickCard} />
      ) : (
        <div className="game-over flex flex-col gap-2">
          <div className="text-white text-3xl text-center mt-4 mb-4">
            GAME OVER!
          </div>
          <button className="primary" onClick={restartGame}>
            PLAY AGAIN
          </button>
          <button className="secondary" onClick={returnMainMenu}>
            RETURN MAIN MENU
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
