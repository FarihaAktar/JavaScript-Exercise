class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}



const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

node2.next = node3;
node1.next = node2;

const list1 = new LinkedList(node1);

const reverseList = (head) => {
    let current = head;
    let prev = null;
    let next = null;
    while(current){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    head = prev;
    return head
}

const res = reverseList(list1.head);
console.log(res)