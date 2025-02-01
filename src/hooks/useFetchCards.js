import { useState } from "react";

const useFetchCards = () => {
  const [cards, setCards] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCards = async (quantity = 1) => {
    try {
      setLoading(true);
      setError(null);

      const parsedQuantity = Number(quantity);

      if (isNaN(parsedQuantity)) throw new Error("Quantity must be a number");
      if (parsedQuantity < 1)
        throw new Error("Quantity must be greater than 0");

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}${
          import.meta.env.ENDPOINT
        }${parsedQuantity}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch cards");
      }

      const result = await response.json();

      setCards(result);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { cards, loading, error, fetchCards };
};

export default useFetchCards;
