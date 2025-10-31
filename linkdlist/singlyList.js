class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkdList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // traversal(){
  //     let current = this.head;
  //     while(current !==null){
  //         console.log(current.val);
  //         current = current.next;
  //     }
  // }

  pop() {
    if (this.head === null) {
      return undefined;
    }
    let current = this.head;
    let nextTail = current;
    while (current.next !== null) {
      nextTail = current;
      current = current.next;
    }
    this.tail = nextTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }

    return current;
  }

  shift() {
    let temp = this.head;
    let header = this.head;
    if (!this.head) {
      return undefined;
    }
    this.head = temp.next;
    this.length--;
    return header;
  }

  unshift(val) {
    let newNode = new Node(val);
    let oldHead = this.head;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = oldHead;
      this.head = newNode;
      this.length++;
    }
    return this;
  }
  getById(val) {
    if (val < 0 && val > this.length) {
      return null;
    }
    let temp = this.head;
    let count = 0;
    while (count !== val) {
      temp = temp.next;
      count++;
    }
    return temp;
  }

  replaceByIndex(index, val) {
    let foundIndex = this.getById(index);
    if (foundIndex) {
      foundIndex.val = val;
      return true;
    }
    return false;
  }
  insert(index, value) {
    let temp = this.head;
    let newNode = new Node(value);
    let prev = null;
    let count = 0;

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this.newNode;
    }

    while (count < index && temp !== null) {
      prev = temp;
      temp = temp.next;
      count++;
    }

    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return newNode;
  }

  remove(index) {
    if (index < 0) {
      return null;
    }
    let prev = this.head;
    let current = this.head;
    let count = 0;
    while (index > count) {
      prev = current;
      current = current.next;
      count++;
    }

    prev.next = current.next;
    this.length--;
    return current;
  }
}

// let first = new Node("Hi");
// first.next = new Node("There");
// first.next.next = new Node("There");
// first.next.next.next = new Node("There");

let lists = new SinglyLinkdList();
lists.push(22);
lists.push(34);
lists.push(344);
lists.push(45); //add the element in last position...
// lists.pop(); //remove the value in the last position...
// lists.shift(); //delete the first value......
lists.unshift(56);
lists.unshift(556); //adding the value in the first.....
lists.getById(3);
lists.replaceByIndex(2, "SangameshLingshettyChandrakantha...");
lists.insert(3, "PrabhuLingshetty.....");
lists.remove(4);
console.log(lists.remove(2));
