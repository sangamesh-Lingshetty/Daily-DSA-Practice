// this is the push method
class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);
    // if (!this.first) {
    //   this.first = newNode;
    //   this.last = newNode;
    // } else {
    //   let temp = this.first;
    //   this.first = newNode;
    //   this.first.next = temp; //append to the old value
    // }

      //  or
      newNode.next = this.first; //easy step.
      this.first = newNode;

    return this.size++;
  }

  pop(){
    let temp = this.first;
    if(this.first=== this.last){
        this.last = null;
    }else{
        this.first = this.first.next;
        this.size--;
    }

    return temp.val;
  }
}

let stack = new Stack();
stack.push(23);
stack.push(24);
stack.push(25);
stack.push(26);
stack.push(27); //first means top value
stack.push(28);
// stack.pop();
console.log(stack.pop());
