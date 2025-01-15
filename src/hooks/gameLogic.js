const emojis = ["🚀", "🏠", "🏢", "🏥", "🏦", "🏫", "🏭", "🏰", "💻", "📱"];

class GameLogic {
  #state;
  #observers = [];

  constructor(difficulty = 0) {
    this.#state = this.#initialize(difficulty);
  }

  #initialize(difficulty) {
    // console.log("game initialized");
    return { cards: emojis.slice(0, 4 + difficulty * 2) };
  }

  // Observer pattern
  #notify() {
    this.#observers.forEach((observer) => observer(this.#state));
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
  clickCard(icon) {
    this.#state = { ...this.#state, icon };
    console.log(icon);

    this.#notify();
  }

  getCards() {
    return this.#state.cards;
  }
}

export default GameLogic;
