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

const node1 = new SinglyLinkedListNode(1)

const list = new LinkedList(node1)


const insertNodeAtHead = (head, data) => {
    let newNode = new SinglyLinkedListNode(data);
    if (!head) {
        head = newNode
        return head
    }else{
        newNode.next = head;
        head = newNode
        // console.log(head)
    }
    return head
}

insertNodeAtHead(list.head, 23)
// insertNodeAtHead(list.head, 24)