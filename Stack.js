// Stack data structure only supports LIFO
// you can not read value from middle of the Stack
// maintains the order

class Stack {
  constructor(count) {
    this.count = 0;
    this.storage = {};

    this.pop = function () {
      if (this.count === 0) {
        return undefined;
      }

      this.count--;
      const result = this.storage[this.count];
      delete this.storage[this.count];
      return result;
    };

    this.size = function () {
      return this.count;
    };

    this.peek = function () {
      return this.storage[this.count - 1];
    };
  }

  push = (value) => {
    this.storage[this.count] = value;
    this.count++;
  };
}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
console.log(myStack.pop());
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.size());
