// Set data structure has only unique values
// Set can't have duplicate values
// does not maintain order
//

class mySet {
  constructor() {
    this.collection = [];
  }

  has(value) {
    return this.collection.indexOf(value) !== -1;
  }

  add(value) {
    if (!this.has(value)) {
      this.collection.push(value);
      return true;
    }
    return false;
  }

  values() {
    return this.collection;
  }

  remove(value) {
    if (this.has(value)) {
      const index = this.collection.indexOf(value);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }

  size() {
    return this.collection.length;
  }

  union(otherSet) {
    const unionSet = new mySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();

    firstSet.forEach((value) => {
      unionSet.add(value);
    });

    secondSet.forEach((value) => {
      unionSet.add(value);
    });
    return unionSet;
  }

  interSection(otherSet) {
    const intersectionSet = new mySet();
    const firstSet = this.values();

    firstSet.forEach((value) => {
      if (otherSet.has(value)) {
        intersectionSet.add(value);
      }
    });
    return intersectionSet;
  }
}

const mySet1 = new mySet();
const mySet2 = new mySet();

mySet1.add("a");
mySet1.add("b");
mySet1.add("a");
mySet1.add("c");
mySet1.remove("a");

mySet2.add("a");
mySet2.add("a");
mySet2.add("b");
mySet2.add("c");

console.log(mySet1.values());
console.log(mySet2.values());
