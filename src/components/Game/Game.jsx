import useGame from "../../hooks/useGame";
import Board from "../Board/Board";
import Score from "../Score/Score";

const Game = () => {
  const { gameState, clickCard } = useGame(0);

  const { isGameOver } = gameState || {};

  return (
    <div className="game">
      <Score gameState={gameState} />
      <Board gameState={gameState} clickCard={clickCard} />
      {isGameOver && (
        <div className="game-over">
          <div className="text-white text-2xl">Game Over!</div>
          <button>Play again</button>
        </div>
      )}
    </div>
  );
};

export default Game;
