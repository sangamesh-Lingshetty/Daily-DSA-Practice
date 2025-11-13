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
   
    let midvalue = this.length / 2;
    if (midvalue > index) {
      let current = this.head;
      for(let i =0;i<index;i++){
        current = current.next;
      }
      return current;
    } else {
      let current = this.tail;
      for(let i =this.length -1;i>0;i--){
        current = current.prev;
      }
      return current;
    }
  }
}

// 10 -> 100 -> 200
//<-
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

console.log(values.getItem(4));
