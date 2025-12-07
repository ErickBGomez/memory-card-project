const fetchCards = async (quantity = 1, options = {}) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}${
      import.meta.env.VITE_ENDPOINT
    }?n=${quantity}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const content = (await response.json()).content;

  return content.map((card) => ({ ...card, clicked: false }));
};

export default fetchCards;
