// Queue is data structure to hold the data - FIFO
// maintains the order
// Priority Queue - adds messages based on the priority number

class Queue {
  constructor() {
    this.collection = [];
  }

  enqueue(value) {
    this.collection.push(value);
  }

  dequeue(value) {
    this.collection.shift(value);
  }

  size() {
    return this.collection.length();
  }
}
