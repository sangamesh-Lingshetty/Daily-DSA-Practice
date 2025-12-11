class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  maxDepth() {
    if (!this.root) return 0;
    let stack = [[this.root, 1]];
    let maxDepth = 0;

    while (stack.length > 0) {
      let [node, depth] = stack.pop();

      maxDepth = Math.max(maxDepth, depth);
      if (node.left) {
        stack.push([node.left, depth + 1]);
      }
      if (node.right) {
        stack.push([node.right, depth + 1]);
      }
    }
    return maxDepth;
  }
}

// Input:
//      1
//     / \
//    2   3
//   /
//  4

// Output: 3

let tree = new Tree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
console.log(tree.maxDepth());
