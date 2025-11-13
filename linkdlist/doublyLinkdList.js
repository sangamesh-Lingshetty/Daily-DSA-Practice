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

  pop(){
    let removedNode = this.tail;
    if(!this.head) return null || undefined;
    if(this.length ===1){
      this.head = null;
      this.tail = null;
    }else{
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }
}

// 10 -> 100 -> 200
    //<-
const values = new doublyLinkdList();
values.insert(23);
values.insert(100);
values.insert(200);
values.pop()
console.log(values);
