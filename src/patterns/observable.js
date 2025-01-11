class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(callback) {
    this.observers.push(callback);
  }

  unsubscribe(callback) {
    this.observers = this.observers.filter(
      (subscriber) => subscriber !== callback
    );
  }

  notify(data) {
    this.observers.forEach((callback) => callback(data));
  }
}

export default new Observable();
