import fetchCards from "../helpers/fetch-cards";

class GameLogic {
  #state;
  #observers = [];

  constructor() {}

  async startNewGame(difficulty) {
    this.#state = await this.#initialize(difficulty);
    this.#notify();
  }

  #getQuantity(difficulty) {
    return 4 + difficulty * 2;
  }

  async #fetchCards(quantity = 1) {
    try {
      const cards = await fetchCards(quantity);
      return cards;
    } catch (e) {
      console.error("Failed to fetch cards", e);
      return [];
    }
  }

  async #initialize(difficulty) {
    return {
      difficulty,
      cards: await this.#fetchCards(this.#getQuantity(difficulty)),
      lastClicked: null,
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
  async clickCard(c) {
    const newState = { ...this.#state };
    const card = newState.cards.find((card) => card._id === c._id);

    // Avoid clicking cards when game is over
    if (newState.isGameOver) {
      return;
    }

    // Set errors in their respective attribute
    if (!card) {
      newState.error = "Card not found";
      return;
    }

    // Check if card is already clicked
    if (card.clicked) {
      newState.lastClicked = card;

      if (newState.score > newState.highScore)
        newState.highScore = newState.score;

      newState.isGameOver = true;
    }
    // If card is not clicked
    else {
      newState.cards = newState.cards.map((c) =>
        c._id === card._id ? { ...c, clicked: true } : c
      );

      newState.score++;

      // Check if all cards are clicked
      if (newState.cards.every((card) => card.clicked)) {
        // New phase reached
        newState.phase++;

        newState.cards = await this.#fetchCards(
          this.#getQuantity(newState.difficulty)
        );
      }

      // Shuffle cards after click
      newState.cards.sort(() => Math.random() - 0.5);
    }

    this.#state = newState;
    this.#notify();
  }
}

export default GameLogic;
