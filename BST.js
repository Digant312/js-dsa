// Tree - has nodes
// VERY IMPORTANT - data is always getting added as NODES - direct data can NOT be added
// root node - does not have parent node
// leaf node - does not have child nodes
// siblings - have common parent node

// BST - Binary Search Tree - has only two branches
// each node in BST can have max two child nodes
// BST is ordered - each left tree is less than or equal to parent node
// each right tree is greater than or equal to parent node
// if data is ordered in BST form, while searching you can skip half of the data every time

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = (node) => {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };

      return searchTree(node);
    }
  }

  findMin() {
    let node = this.root;
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      } else if (data < current.data) {
        current = current.left;
      }
      if (data > current.data) {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        // node has no children
        if (node.left === null && node.right === null) {
          return null;
        }
        // node has no left child
        if (node.left === null) {
          return node.right;
        }
        // node has no right child
        if (node.right === null) {
          return node.left;
        }
        // node has two children
        // in case of node having two children - go to right node and continue on left side till end
        let tempNode = node.right;
        while (tempNode.left === null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  // ------------------------------- //
  // ------------------------------- //
  // ------------------------------- //
  // ------------------------------- //

  // BST - Traversal & Height
  // height of the node is a distance of that node from the root node
  // min-height - distance of the node from the root that does not have two children
  // max-height - max distance any leaf node has from the root node
  // balaced or not - for the balanced tree, difference bw min-height and max-height would be 0 or 1, not more than 1

  // Tree traversal methods
  // in-depth search goes deep in one branch before it starts searching another branch

  findMinHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  findMaxHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
}

const bst = new BST();

bst.add(4);
bst.add(1);
bst.add(6);
bst.add(7);
bst.add(2);
bst.add(3);
bst.add(4);
bst.add(5);

// console.log(bst.findMin());
// console.log(bst.findMax());

// bst.remove(7);
// console.log(bst.findMax());

// bst.remove(5);
// console.log(bst.findMax());
