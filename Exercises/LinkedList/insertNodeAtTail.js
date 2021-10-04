class SinglyLinkedListNode {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

const node = new SinglyLinkedListNode(3)

// const list = new LinkedList(node)
const list = new LinkedList()
// console.log(list.head.next)

const insertNodeAtTail = (head, data) => {
    let newNode = new SinglyLinkedListNode(data);
    if (head === null) {
        // return newNode
        head = newNode
        console.log(head)
    }
    let temp = head
    // console.log(temp)
    while (temp.next !== null) {
        temp = temp.next
        // console.log(temp)
    }

    temp.next = newNode;
    console.log(head)

}

insertNodeAtTail(list.head, 4)