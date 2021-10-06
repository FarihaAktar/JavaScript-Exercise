class DoublyLinkedList {
    constructor(data) {
        this.data = data
        this.previous = null
        this.next = null
    }
}


const node1 = new DoublyLinkedList(1);
const node2 = new DoublyLinkedList(2);
const node3 = new DoublyLinkedList(3);

node2.next = node3;
node3.previous = node2;
node1.next = node2;
node2.previous = node1;

const reverseDoublyLinkedList = (llist) => {
    if(!llist){
        return llist;
    }
    let head = llist;
    let next = null
    while(head !== null){
        next = head.next;
        head.next = head.previous;
        head.previous = next;
        console.log(head)
        llist = head;
        head = next
    }
    console.log(llist)
}

reverseDoublyLinkedList(node1)
// console.log(node1)