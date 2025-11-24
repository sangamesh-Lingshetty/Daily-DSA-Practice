class BinarySearchTree{
    constructor(){
        this.root = null;
    }
}

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


let tree = new BinarySearchTree();
tree.root = new Node(34);
tree.root.left = new Node(23);
tree.root.right = new Node(45);
tree.root.left.left = new Node(12);