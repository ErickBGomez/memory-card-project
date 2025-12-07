import { useEffect, useRef } from "react";
import { AnimatePresence } from "motion/react";
import useGame from "../../hooks/useGame";
import Board from "../Board/Board";
import Score from "../Score/Score";
import GameOver from "../GameOver/GameOver";
import PropTypes from "prop-types";

const Game = ({ difficulty, returnMenu }) => {
  const { gameState, clickCard, startNewGame } = useGame();
  const gameRef = useRef(null);

  const { cards, isGameOver, lastClicked } = gameState || {};

  useEffect(() => {
    startNewGame(difficulty);
  }, [startNewGame, difficulty]);

  const restartGame = () => {
    startNewGame(difficulty);
  };

  const returnMainMenu = () => {
    returnMenu(-1);
  };

  if (!cards) return <div className="text-sm">LOADING CARDS...</div>;

  return (
    <AnimatePresence mode="popLayout">
      <div
        className="game max-w-[400px] w-full flex flex-col gap-4"
        ref={gameRef}
      >
        <Score gameState={gameState} />
        {!isGameOver ? (
          <Board gameState={gameState} clickCard={clickCard} />
        ) : (
          <GameOver
            restartGame={restartGame}
            returnMainMenu={returnMainMenu}
            lastCardClicked={lastClicked}
          />
        )}
      </div>
    </AnimatePresence>
  );
};

Game.propTypes = {
  difficulty: PropTypes.number.isRequired,
  returnMenu: PropTypes.func.isRequired,
};

export default Game;
