import Card from "../Card/Card";

const Board = ({ gameState, clickCard }) => {
  const { difficulty, cards, isGameOver } = gameState || {};

  const mappedCards = cards?.map((card) => (
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
      {mappedCards}
      {isGameOver && <div className="text-white text-2xl">Game Over!</div>}
    </div>
  );
};

export default Board;
