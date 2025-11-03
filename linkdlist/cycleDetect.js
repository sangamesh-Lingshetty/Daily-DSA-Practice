class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class singlyList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  addValue(newnodeValue) {
    let newnode = new Node(newnodeValue);

    if (this.head == null && this.length == 0) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      this.tail.next = newnode;
      this.tail = newnode;
    }
    this.length++;
    return this;
  }
  createCycle(position) {
    let target = null;
    let current = this.head;
    let index = 0;
    while (current.next !== null) {
      if (index === position) target = current;
      current = current.next;
      index++;
    }
    current.next = target; //make it cycle.
    return this;
  }

  detect() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) {
        return true;
      }
    }
    return false;
  }

  print() {
    let current = this.head;

    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
    return this;
  }
}

let list = new singlyList();
list.addValue(23);
list.addValue(24);
list.addValue(25);
list.addValue(26);
// list.createCycle(1);
console.log(list.detect());
console.log(list.print());
