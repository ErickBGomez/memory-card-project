import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Board = ({ gameState, clickCard }) => {
  const { difficulty, cards } = gameState || {};
  const [renderedCards, setRenderedCards] = useState({ content: [], index: 0 });

  // TODO: Find a way to render cards and keep updates of the cards from gameLogic.js
  // TODO: (this is because currently, renderedCards does not receive the new cards from gameLogic)
  // const mappedCards = cards?.map((card, index) => (
  //   <Card
  //     key={card._id || index}
  //     url={card.url}
  //     onClick={() => {
  //       clickCard(card);
  //       shuffleCards();
  //     }}
  //   />
  // ));

  // Shuffle cards in frontend to avoid creating new cards every click
  const shuffleCards = () => {
    setRenderedCards((cards) => ({
      content: cards.content.sort(() => Math.random() - 0.5),
      index: cards.index,
    }));
  };

  // Delay rendering of cards to create a staggered effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (renderedCards.index >= cards.length) {
        clearInterval(interval);
        return;
      }

      const card = cards[renderedCards.index];

      setRenderedCards((prev) => ({
        content: [
          ...prev.content,
          <Card
            key={card._id || prev.index}
            url={card.url}
            onClick={() => {
              clickCard(card);
              shuffleCards();
            }}
          />,
        ],
        index: prev.index + 1,
      }));
    }, 100);

    return () => clearInterval(interval);
  }, [cards, clickCard, renderedCards.index]);

  return (
    <div
      // Apply max-w-96 class only when difficulty is 1 (3x2 board)
      className={`
      board flex items-center self-center justify-center gap-4 flex-wrap
      ${difficulty === 1 ? "max-w-80" : "max-w-96"}
      `}
    >
      {renderedCards.content}
    </div>
  );
};

export default Board;
