class GameLogic {
  #state;
  #observers = [];

  constructor() {
    this.#initialize();
  }

  #initialize() {
    console.log("game initialized");
    return { test: "test" };
  }

  #notify() {
    this.#observers.forEach((observer) => observer(this.#state));
  }

  subscribe(callback) {
    this.observers.push(callback);
    callback(this.#state);

    return () => this.#observers.filter((observer) => observer !== callback);
  }

  // Actions
  clickCard(icon) {
    this.#state = { ...this.#state, icon };
    console.log(icon);

    this.#notify();
  }
}

export default GameLogic;
