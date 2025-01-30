import useGame from "../../hooks/useGame";
import Board from "../Board/Board";
import Score from "../Score/Score";

const Game = () => {
  const { gameState, clickCard } = useGame();

  const { isGameOver } = gameState || {};

  return (
    <div className="game">
      <Score gameState={gameState} />
      <Board gameState={gameState} clickCard={clickCard} />
      {isGameOver && <div className="text-white text-2xl">Game Over!</div>}
    </div>
  );
};

export default Game;
