class ListNode {
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

let node1 = new ListNode(2)
let node2 = new ListNode(3)
node1.next = node2

let list = new LinkedList(node1)

// console.log(list.head)


// function defined
const printLinkedList = (value) => {
    let temp = value;
    while (temp.next !== null) {
        console.log(temp.data)
        temp = temp.next
    }
    console.log(temp.data)
}

printLinkedList(list.head)


