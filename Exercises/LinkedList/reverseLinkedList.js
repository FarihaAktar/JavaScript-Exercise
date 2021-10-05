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

const node1 = new SinglyLinkedListNode(2);
const node2 = new SinglyLinkedListNode(3);
const node3 = new SinglyLinkedListNode(4);

node2.next = node3;
node1.next = node2;

const list = new LinkedList(node1);

const reverse = (llist) => {
    let previous = null;
    let current = llist;
    let next = null;
    while (current !== null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next
    }
    llist = previous;
    console.log(llist) ;
}

reverse(list.head)