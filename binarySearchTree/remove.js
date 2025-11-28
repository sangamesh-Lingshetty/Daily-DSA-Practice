class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newnode = new Node(value);
    if (!this.root) {
      this.root = newnode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.value > newnode.value) {
          if (currentNode.left === null) {
            currentNode.left = newnode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (currentNode.value < newnode.value) {
          if (currentNode.right === null) {
            currentNode.right = newnode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
    return this;
  }

  remove(removedValue) {
    let currentnode = this.root;
    let parentNode = null;
    // first step is find the value where it's 
    // second is track the two node first and second node for the deleting
    // third is make it the second node is null becuase if you do that it will remove from the tree
    // this is the complete step one logic means it will work only one test case which is 
    // if the chile node does't have it then it will work
    
    while (currentnode) {
      if (currentnode.value > removedValue) {
        parentNode = currentnode;
        currentnode = currentnode.left;
      } else if (currentnode.value < removedValue) {
        parentNode = currentnode;
        currentnode = currentnode.right;
      } else {
        // found the value for the delete node
        if (!currentnode.right && !currentnode.left) {
          if (parentNode.left.value === removedValue) {
            parentNode.left = null;
          } else if(parentNode.right.value === removedValue) {
            parentNode.right = null;
          }

          return true;
        }
      }
    }
  }
}

let tree = new BST();
tree
  .insert(22)
  .insert(49)
  .insert(85)
  .insert(66)
  .insert(95)
  .insert(90)
  .insert(100)
  .insert(88)
  .insert(93)
  .insert(89);

tree.remove(66);
tree.root.right.right.left; // 88
console.log(tree);
