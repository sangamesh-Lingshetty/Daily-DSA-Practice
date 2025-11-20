// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue1 {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(data) {
    var node = new Node(data);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

class Stack {
  constructor() {
    this.queue1 = new Queue1(); //main queue.
    this.queue2 = new Queue1(); //helper queue.
  }

  push(val) {
    this.queue2.enqueue(val);

    while (this.queue1.size > 0) {
      this.queue2.enqueue(this.queue1.dequeue());
    }

    // swap Q2 to Q1
    let temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;

    return this;
  }
  pop() {
    if (this.queue1.size === 0) {
      return null;
    }
    return this.queue1.dequeue(); //40
  }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
;
console.log(stack.pop());
