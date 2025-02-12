import { useEffect } from "react";
import { AnimatePresence } from "motion/react";
import useGame from "../../hooks/useGame";
import Board from "../Board/Board";
import Score from "../Score/Score";
import GameOver from "../GameOver/GameOver";

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
    <AnimatePresence mode="popLayout">
      <div className="game max-w-[400px] w-full flex flex-col gap-4">
        <Score gameState={gameState} />
        {!isGameOver ? (
          <Board gameState={gameState} clickCard={clickCard} />
        ) : (
          <GameOver restartGame={restartGame} returnMainMenu={returnMainMenu} />
        )}
      </div>
    </AnimatePresence>
  );
};

export default Game;
