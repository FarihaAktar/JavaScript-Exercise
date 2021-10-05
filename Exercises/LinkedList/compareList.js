class SinglyLinkedListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

const node1 = new SinglyLinkedListNode(1);
const node2 = new SinglyLinkedListNode(2);
const node3 = new SinglyLinkedListNode(3);

node2.next = node3;
node1.next = node2;

const list1 = new LinkedList(node1);
const list2 = new LinkedList(node1);


const compareList = (llist1, llist2) => {
    if (llist1 === null && llist2 === null) {
        return 1;
    } else if (llist1 === null || llist2 === null) {
        return 0;
    }
    if (llist1.data === llist2.data) {
        return compareList(llist1.next, llist2.next)
    } else {
        return 0
    }
}

const res = compareList(list1.head, list2.head)

console.log(res)





