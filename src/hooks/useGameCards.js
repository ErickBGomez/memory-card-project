import { useEffect, useState } from "react";
import fetchCards from "../helpers/fetch-cards";

const useGameCards = (quantity = 1) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const loadCards = async () => {
      try {
        const cards = await fetchCards(quantity);
        setCards(cards);
      } catch (e) {
        console.error("Failed to fetch cards", e);
      }
    };

    loadCards();
  }, [quantity]);

  return cards;
};

export default useGameCards;
