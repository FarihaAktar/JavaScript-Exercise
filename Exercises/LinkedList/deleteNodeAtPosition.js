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

const deleteNode = (llist, position) => {
    if(!llist){
        return null
    }
    if(position === 0){
        llist = llist.next
        console.log(llist)
    }
    let counter = 1;
    let pointer = llist
    while(pointer.next !== null){
        if(counter === position){
            pointer.next = pointer.next.next;
            // console.log(pointer)
            break
        }
        counter++;
        pointer = pointer.next

    }
    console.log(llist)
}

deleteNode(list.head, 1)

