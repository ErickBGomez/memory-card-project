import Board from "../Board/Board";
import Score from "../Score/Score";

const Game = () => {
  return (
    <div className="game">
      <Score />
      <Board difficulty={2} />
    </div>
  );
};

export default Game;
