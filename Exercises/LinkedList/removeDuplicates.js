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
const node3 = new SinglyLinkedListNode(3);
const node4 = new SinglyLinkedListNode(4);
node3.next = node4;
node2.next = node3;
node1.next = node2;

const list = new LinkedList(node1);

// console.log(list.head)

const removeDuplicates = (llist) => {
    if (!llist) {
        return null;
    }
    let newList = llist;
    while(newList){
        if(newList.next && newList.data === newList.next.data){
            newList.next =  newList.next.next;
            console.log(newList)
        }else{
            newList = newList.next;
        }
    }
    // console.log(llist)
    
}

removeDuplicates(list.head)