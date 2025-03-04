import { useCallback, useState } from "react";
import Card from "../Card/Card";
import { AnimatePresence } from "motion/react";

const Board = ({ gameState, clickCard }) => {
  const { difficulty, cards, score } = gameState || {};
  const [cardsFlipped, setCardsFlipped] = useState(false);
  const [hideCards, setHideCards] = useState(false);

  const onClickCard = useCallback(
    (card) => {
      // Flip all cards when a card is clicked, and then flip them back after 500ms
      setCardsFlipped(true);
      setTimeout(() => setCardsFlipped(false), 500);
      // Add delay when flipping the cards to avoid showing the new cards early
      setTimeout(() => {
        clickCard(card);

        // Hide cards when all of them were clicked (in other words, when scoring a new phase)
        if ((score + 1) % cards.length === 0) {
          setHideCards(true);
          setTimeout(() => setHideCards(false), 1000);
        }
      }, 75);
    },
    [clickCard, score, cards]
  );

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
      // Apply max-w-80 class only when difficulty is 1 (3x2 board)
      className={`
      board flex items-center self-center justify-center gap-4 flex-wrap
      ${difficulty === 1 ? "max-w-80" : "max-w-96"}
      `}
    >
      <AnimatePresence>{!hideCards && mappedCards}</AnimatePresence>
    </div>
  );
};

export default Board;
