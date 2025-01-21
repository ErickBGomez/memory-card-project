import useGame from "../../hooks/useGame";
import Card from "../Card/Card";

const Board = ({ difficulty = 2 }) => {
  const { clickCard, gameState } = useGame();

  if (difficulty < 0 || difficulty > 2) return null;

  const cards = gameState?.cards.map((card) => (
    <Card key={card.id} icon={card.icon} onClick={() => clickCard(card)} />
  ));

  return (
    <div
      // Apply max-w-96 class only when difficulty is 1 (3x2 board)
      className={`
      board flex items-center justify-center gap-4 flex-wrap
      ${difficulty === 1 ? "max-w-80" : "max-w-96"}
      `}
    >
      {cards}
      {gameState?.isGameOver && (
        <div className="text-white text-2xl">Game Over!</div>
      )}
    </div>
  );
};

export default Board;
