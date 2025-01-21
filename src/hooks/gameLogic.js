// TODO: Check win

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
    console.log("game initialized");
    const cards = cardsdb.map((card) => ({ ...card, clicked: false }));

    return { cards: cards.slice(0, 4 + difficulty * 2), isGameOver: false };
  }

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
    const newState = { ...this.#state };
    const card = newState.cards.find((card) => card.id === c.id);

    if (newState.isGameOver) {
      return;
    }

    if (!card) {
      console.log("Card not found");
      return;
    }

    if (card.clicked) {
      console.log(`Game over! Card (${card.icon}) already clicked`);
      newState.isGameOver = true;
    } else {
      newState.cards = newState.cards.map((c) =>
        c.id === card.id ? { ...c, clicked: true } : c
      );

      // Shuffle cards for each click
      newState.cards.sort(() => Math.random() - 0.5);
    }

    this.#state = newState;
    this.#notify();
  }
}

export default GameLogic;
