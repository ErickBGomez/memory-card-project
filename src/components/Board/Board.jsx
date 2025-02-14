import { useState } from "react";
import Card from "../Card/Card";

const Board = ({ gameState, clickCard }) => {
  const { difficulty, cards } = gameState || {};
  const [cardsFlipped, setCardsFlipped] = useState(false);

  const onClickCard = (card) => {
    clickCard(card);
    setCardsFlipped(true);
    setTimeout(() => setCardsFlipped(false), 500);
  };

  const mappedCards = cards?.map((card, index) => (
    <Card
      key={card._id || index}
      id={card._id}
      url={card.url}
      onClick={() => onClickCard(card)}
      flipped={cardsFlipped}
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
