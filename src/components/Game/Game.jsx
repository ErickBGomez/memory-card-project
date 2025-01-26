import useGame from "../../hooks/useGame";
import Board from "../Board/Board";
import Score from "../Score/Score";

const Game = () => {
  const { gameState, clickCard } = useGame();

  return (
    <div className="game">
      <Score gameState={gameState} />
      <Board gameState={gameState} clickCard={clickCard} />
    </div>
  );
};

export default Game;
