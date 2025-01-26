import Board from "../Board/Board";
import Score from "../Score/Score";

const GameGUI = () => {
  return (
    <div className="game-gui">
      <Score />
      <Board difficulty={2} />
    </div>
  );
};

export default GameGUI;
