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
const node5 = new SinglyLinkedListNode(5);
const node6 = new SinglyLinkedListNode(6);

node3.next = node4;
node2.next = node3;
node1.next = node2;

node4.next = node5;
node6.next = node4;

const list1 = new LinkedList(node1);
const list2 = new LinkedList(node6);

const findMergeNode = (headA, headB) => {
    let pointer1 = headA;
    let pointer2 = headB;
    // let counter = 0
    while(pointer1 !== null && pointer2 !== null){
        if(pointer1 === pointer2){
            break
        }else{
            pointer1 = pointer1.next
            pointer2 = pointer2.next
            // counter++;
            // console.log(counter);
            // console.log(pointer1)
            // console.log(pointer2)
        }
        if(pointer1.next === null){
            pointer1 = headA
        }
        if(pointer2.next === null){
            pointer2 = headB
        }

    }
    console.log(pointer1.data)
}

findMergeNode(list1.head, list2.head)

// console.log(list1.head === list2.head)