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

let list = new singlyList();
list


// 21. Merge Two Sorted Lists — learn list merging
// https://leetcode.com/problems/merge-two-sorted-lists/description/

var mergeTwoLists = function(list1, list2) {
    let head = new ListNode();//dummy node.
    let newnode = head;
    while(list1 !== null && list2 !== null){
        if(list1.val < list2.val){
            newnode.next = list1;
             list1 = list1.next;
        }else{
            newnode.next = list2;
             list2 = list2.next;
        } 
        newnode = newnode.next;//move the value for the next items.
    }

    if(list1 !== null) newnode.next = list1;
    if(list2 !== null) newnode.next = list2;

    return head.next;
};