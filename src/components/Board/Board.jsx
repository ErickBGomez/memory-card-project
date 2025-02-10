import Card from "../Card/Card";

const Board = ({ gameState, clickCard }) => {
  const { difficulty, cards } = gameState || {};

  const mappedCards = cards?.map((card, index) => (
    <Card
      key={card._id || index}
      url={card.url}
      onClick={() => clickCard(card)}
      animationDelay={index * 0.1}
    />
  ));

  return (
    <div
      // Apply max-w-96 class only when difficulty is 1 (3x2 board)
      className={`
      board flex items-center self-center justify-center gap-4 flex-wrap
      ${difficulty === 1 ? "max-w-80" : "max-w-96"}
      `}
    >
      {mappedCards}
    </div>
  );
};

export default Board;
