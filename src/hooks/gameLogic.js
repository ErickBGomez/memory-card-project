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

  constructor() {}

  startNewGame(difficulty) {
    this.#state = this.#initialize(difficulty);
    this.#notify();
  }

  #initialize(difficulty) {
    console.log("game initialized");
    const cards = cardsdb.map((card) => ({ ...card, clicked: false }));

    return {
      difficulty,
      cards: cards.slice(0, 4 + difficulty * 2),
      phase: 1,
      score: 0,
      highScore: this.#state?.highScore || 0,
      isGameOver: false,
    };
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

    // Avoid clicking cards when game is over
    if (newState.isGameOver) {
      return;
    }

    if (!card) {
      console.log("Card not found");
      return;
    }

    // Check if card is already clicked
    if (card.clicked) {
      console.log(`Game over! Card (${card.icon}) already clicked`);

      if (newState.score > newState.highScore)
        newState.highScore = newState.score;

      newState.isGameOver = true;
    }
    // If card is not clicked
    else {
      newState.cards = newState.cards.map((c) =>
        c.id === card.id ? { ...c, clicked: true } : c
      );

      newState.score++;

      // Check if all cards are clicked
      if (newState.cards.every((card) => card.clicked)) {
        newState.phase++;

        console.log("New phase reached!");

        newState.cards = newState.cards.map((card) => ({
          ...card,
          clicked: false,
        }));
      }

      // Shuffle cards for each click
      newState.cards.sort(() => Math.random() - 0.5);
    }

    this.#state = newState;
    this.#notify();
  }
}

export default GameLogic;
