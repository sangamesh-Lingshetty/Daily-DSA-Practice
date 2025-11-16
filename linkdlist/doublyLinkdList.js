// node
// value
// next
// prev

// doublylist
// head;
// tail;
// length;

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkdList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    //remove the last element
    let removedNode = this.tail;
    if (!this.head) return null || undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }

  shift() {
    //remove the first elements.
    let removedNode = this.head;
    if (!this.head) return null || undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }
    this.length--;
    return removedNode;
  }

  unshift(value) {
    //add the first index value
    let newnode = new Node(value);
    if (!this.head) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      this.head.prev = newnode;
      newnode.next = this.head;
      this.head = newnode;
    }
    this.length++;
    return this;
  }

  getItem(index) {
    if (index < 0) return null;
    let midvalue = this.length / 2;
    if (midvalue > index) {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    } else {
      let current = this.tail;
      for (let i = this.length - 1; i > 0; i--) {
        current = current.prev;
      }
      return current;
    }
  }
  set(index, value) {
    //replace the value based on the index value
    let foundNode = this.getItem(index);
    if (foundNode !== null) {
      foundNode.val = value;
      return true;
    }
    return false;
  }

  add(index, value) {
    //add the value based on the index needed.
    if (index == 0) {
      this.unshift(value);
    }
    if (index == this.length) {
      return this.insert(value);
    }

    let prevNode = this.getItem(index - 1);
    let newNode = new Node(value);
    let nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    nextNode.prev = newNode;
    newNode.next = nextNode;
    this.length++;
    return this;
  }

  remove(index) {
    //remove the value from based on the index needed.

    if (index < 0) return null;
    if (index == 0) return this.shift();
    if (index == this.length - 1) return this.pop();
    let foundIndex = this.getItem(index);
    if (!foundIndex) return null;
    let prevNode = foundIndex.prev;
    let nextNode = foundIndex.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    foundIndex.next = null;
    foundIndex.prev = null;
    this.length--;
    return foundIndex;
  }

  reverse(){
    let current = this.head;
    let temp = null;
    while(current !== null){
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev; //move the next node.we have to go the prev next is null.
    }

    if(temp !==null){
      this.head = temp.prev
    }
    return this;
  }
}

// 123 -> 100 -> 200 -> 300 -> 400 ->500
 
const values = new doublyLinkdList();
values.insert(123);
values.insert(100);
values.insert(200);
values.insert(300);
values.insert(400);
values.insert(500);
values.insert(600);
values.insert(700);
values.insert(800);
// values.pop();
// values.shift() remove from the first value...
// values.unshift(0); //add the from the biggining....
// values.getItem(4)
// values.set(-10,"sangamesh")
// values.add(0, "Boss");
// console.log(values.set(0,"sangamesh"));
// values.remove(2);
// values.reverse();
console.log(values.reverse());
