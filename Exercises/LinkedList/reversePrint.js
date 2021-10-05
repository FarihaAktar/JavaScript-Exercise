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

node1.next = node2;

const list = new LinkedList(node1);


const reversePrint = (llist) => {
    if (!llist) {
        return null
    }
    // console.log(llist, 1)
    reversePrint(llist.next)
    // console.log(llist, 2)
    console.log(llist.data)
}

reversePrint(list.head)