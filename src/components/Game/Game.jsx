import { useEffect } from "react";
import { AnimatePresence } from "motion/react";
import useGame from "../../hooks/useGame";
import Board from "../Board/Board";
import Score from "../Score/Score";
import GameOver from "../GameOver/GameOver";

const Game = ({ difficulty, returnMenu }) => {
  const { gameState, clickCard, startNewGame } = useGame();

  const { loading, error, isGameOver, lastClicked } = gameState || {};

  useEffect(() => {
    startNewGame(difficulty);
  }, [startNewGame, difficulty]);

  const restartGame = () => {
    startNewGame(difficulty);
  };

  const returnMainMenu = () => {
    returnMenu(-1);
  };

  if (loading) return <div>LOADING CARDS...</div>;
  if (error)
    return (
      <div className="errors flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">AN ERROR HAS OCCURRED!</h2>
        <div>SOMETHING WENT WRONG WHEN LOADING THE CARDS</div>
        <button onClick={restartGame}>RETRY</button>
      </div>
    );

  return (
    <AnimatePresence mode="popLayout">
      <div className="game max-w-[400px] w-full flex flex-col gap-4">
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

export default Game;
