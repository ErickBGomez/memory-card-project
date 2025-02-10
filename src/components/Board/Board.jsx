import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Board = ({ gameState, clickCard }) => {
  const { difficulty, cards } = gameState || {};
  const [renderedCard, setRenderedCards] = useState([]);
  const [index, setRenderedIndex] = useState(0);

  const mappedCards = cards?.map((card, index) => (
    <Card
      key={card._id || index}
      url={card.url}
      onClick={() => clickCard(card)}
      animationDelay={index * 0.1}
    />
  ));

  useEffect(() => {
    const interval = setInterval(() => {
      if (index >= mappedCards.length) {
        clearInterval(interval);
        return;
      }

      setRenderedCards((prev) => [...prev, mappedCards[index]]);
      setRenderedIndex(index + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [mappedCards, index]);

  return (
    <div
      // Apply max-w-96 class only when difficulty is 1 (3x2 board)
      className={`
      board flex items-center self-center justify-center gap-4 flex-wrap
      ${difficulty === 1 ? "max-w-80" : "max-w-96"}
      `}
    >
      {renderedCard}
    </div>
  );
};

export default Board;
