// this is complete for the queue only...

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  QueuePushValue(value) {
    //adding the ofter first element.. like back side 20->10
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return this;
  }

  enqueue(value) {
    //adding the first element.. like 10->20->30->40
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  dqueue() {
    //remove the last element in the queue...
    if (!this.last) return null;
    let temp = this.first;
    if(this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

}

let queue = new Queue();
// queue.QueuePushValue(10);
// queue.QueuePushValue(140);
// queue.QueuePushValue(120);
queue.enqueue(23);
queue.enqueue(25);
queue.enqueue(27);
queue.enqueue(28);

queue.dqueue();
console.log(queue);
