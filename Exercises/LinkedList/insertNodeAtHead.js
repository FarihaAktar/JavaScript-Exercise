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

const list = new LinkedList()


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
insertNodeAtHead(list.head, 24)