import { useEffect, useState } from "react";
import fetchCards from "../helpers/fetch-cards";

const useGameCards = (quantity = 1, delay = 0) => {
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

    setTimeout(() => loadCards(), delay || 0);
  }, [quantity, delay]);

  return cards;
};

export default useGameCards;
