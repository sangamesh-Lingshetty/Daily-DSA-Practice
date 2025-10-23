class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class SinglyLinkdList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value){
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }else{
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

    pop(){
        if(this.head === null){
            return undefined;
        }
        let current = this.head;
        let nextTail = current;
        while(current.next !== null){
            nextTail = current;
            current = current.next;
        }
        this.tail = nextTail;
         this.tail.next = null;
        this.length--;
        if(this.length ===0){
            this.tail = null;
            this.head = null;
        }
       
        return current;
    }
}

// let first = new Node("Hi");
// first.next = new Node("There");
// first.next.next = new Node("There");
// first.next.next.next = new Node("There");

let lists = new SinglyLinkdList();
lists.push("sangamesh");
lists.push("lingshetty");
lists.push("sedol");
lists.pop();
console.log(lists);
