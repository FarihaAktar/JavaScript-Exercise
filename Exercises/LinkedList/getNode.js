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
const node4 = new SinglyLinkedListNode(4);

node3.next = node4
node2.next = node3;
node1.next = node2;

const list = new LinkedList(node1);

const getNode = (llist, positionFromTail) => {
    let current = llist;
    let previous = null;
    let next = null;
    while (current !== null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next
    }
    for (let i = 0; i < positionFromTail; i++) {
        previous = previous.next;
    }
    console.log(previous.data)
}

getNode(list.head, 2)