class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertNewNode(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (current.value === value) return null;
        if (current.value > value) {
          //left part
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (current.value < value) {
          //right part.
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
    return this;
  }

  findValue(findValue) {
    if (!this.root) {
      return null || undefined;
    }
    if (this.root.value === findValue) return true;
    let current = this.root;
    let found = false;
    while (current) {
      if (current.value > findValue) {
        current = current.left;
      } else if (current.value === findValue) {
        return true;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}

let tree = new BinarySearchTree();
tree.insertNewNode(10);
tree.insertNewNode(6);
tree.insertNewNode(3);
tree.insertNewNode(8);
tree.insertNewNode(15);
tree.insertNewNode(20);
tree.insertNewNode(13);
// tree.findValue(3);

console.log(tree.findValue(1056));
