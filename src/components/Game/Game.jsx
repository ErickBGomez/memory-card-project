import useGame from "../../hooks/useGame";
import Board from "../Board/Board";
import Score from "../Score/Score";

const Game = () => {
  const { gameState, clickCard } = useGame();

  console.log(gameState);

  return (
    <div className="game">
      <Score />
      <Board gameState={gameState} clickCard={clickCard} />
    </div>
  );
};

export default Game;
