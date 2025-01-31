import { useEffect } from "react";
import useGame from "../../hooks/useGame";
import Board from "../Board/Board";
import Score from "../Score/Score";

const Game = ({ difficulty, returnMenu }) => {
  const { gameState, clickCard, startNewGame } = useGame(difficulty);

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
    <div className="game max-w-[400px] w-full">
      <Score gameState={gameState} />
      {!isGameOver ? (
        <Board gameState={gameState} clickCard={clickCard} />
      ) : (
        <div className="game-over flex flex-col gap-2 mt-4">
          <div className="text-white text-2xl text-center">GAME OVER!</div>
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
