const cardsdb = [
  { id: 1, icon: "🚀" },
  { id: 2, icon: "🏠" },
  { id: 3, icon: "🏢" },
  { id: 4, icon: "🏥" },
  { id: 5, icon: "🏦" },
  { id: 6, icon: "🏫" },
  { id: 7, icon: "🏭" },
  { id: 8, icon: "🏰" },
  { id: 9, icon: "💻" },
  { id: 10, icon: "📱" },
];

class GameLogic {
  #state;
  #observers = [];

  constructor(difficulty = 0) {
    this.#state = this.#initialize(difficulty);
  }

  #initialize(difficulty) {
    // console.log("game initialized");
    const cards = cardsdb.map((card) => ({ ...card, clicked: false }));

    return { cards: cards.slice(0, 4 + difficulty * 2) };
  }

  // Observer pattern
  #notify() {
    this.#observers.forEach((callback) => callback(this.#state));
  }

  subscribe(callback) {
    this.#observers.push(callback);
    callback(this.#state);
  }

  unsubscribe(callback) {
    this.#observers = this.#observers.filter(
      (observer) => observer !== callback
    );
  }

  // Actions
  clickCard(c) {
    const card = this.#state.cards.find((card) => card.id === c.id);

    // Return if card is not found or already clicked
    if (!card) {
      console.log("Card not found");
      return;
    }

    if (card.clicked) {
      console.log("Card already clicked");
      return;
    }

    // Update card status when clicked once and notify event
    this.#state.cards = this.#state.cards.map((c) =>
      c.id === card.id ? { ...c, clicked: true } : c
    );

    this.#notify();
  }
}

export default GameLogic;
