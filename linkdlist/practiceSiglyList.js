// 206. Reverse Linked List — easiest, confirms pointer logic

// 21. Merge Two Sorted Lists — learn list merging

// 141. Linked List Cycle — pointer speed logic

// 19. Remove Nth Node From End — learn two-pointer tricks

// 2. Add Two Numbers — list traversal with carry

// 143. Reorder List — advanced pointer manipulation (mixes all)

// first is the solved the reverse the two sorted lists
// custom class build for the muscles for the strong
class Node{
    constructor(value){
        this.value = value;
        this.next= null;
    }
}

class singlyList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length =0;
    }
    reverse(){
        let prev = null;
        let current = this.head;
        let nextvalue = null;

        while(current != null){
            nextvalue = current.next;//first store the next value for not break the lists.
            current.next = prev; // this is the core logic reversed.
            prev = current; // target the prev value for the connect the backward lists.
            current = nextvalue; // move to the next node.
        }
        current = this.head;
        return this;
    }
}


// 21. Merge Two Sorted Lists — learn list merging
// https://leetcode.com/problems/merge-two-sorted-lists/description/
