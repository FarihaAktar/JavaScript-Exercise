class DoublyLinkedList {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}


const node1 = new DoublyLinkedList(1);
const node2 = new DoublyLinkedList(2);
const node3 = new DoublyLinkedList(10);


node3.prev = node2;
node2.next = node3;
node2.prev = node1;
node1.next = node2;


const sortedInsert = (llist, data) => {
    let newNode = new DoublyLinkedList(data);
    if (!llist) {
        return newNode;
    }
    let current = llist;
    if (data < current.data) {
        newNode.next = current;
        current.prev = newNode;
        return newNode;
    }
    while (current !== null) {
        if (data >= current.data) {
            if (current.next === null) {
                current.next = newNode;
                newNode.prev = current;
                return llist
            }
            if (current.next.data >= data) {
                newNode.next = current.next;
                newNode.prev = current;
                current.next = newNode;
                newNode.next.prev = newNode;
                return llist
            }
        }
        current = current.next;
    }

}

const res = sortedInsert(node1, 5)
// console.log(node1.next.prev)

console.log(res)