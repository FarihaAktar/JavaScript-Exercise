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

node2.next = node4;
node1.next = node3;

const list1 = new LinkedList(node1);
const list2 = new LinkedList(node2);

const mergeLists = (head1, head2) => {
    var head3 = new SinglyLinkedListNode(null);
    var prev = head3;
    
    // while both linked lists are not empty
    while (head1 !== null && head2 !== null) {
      if (head1.data <= head2.data) { 
        prev.next = head1;
        head1 = head1.next;
        // console.log(prev)
      } else {
        prev.next = head2;
        head2 = head2.next;
      }
      prev = prev.next;
    //   console.log(prev)
    }
    console.log(prev)
    console.log(head2)
    if (head1 === null) { prev.next = head2; }
    if (head2 === null) { prev.next = head1; }
    
    // console.log(head3.next) ;
}

mergeLists(list1.head, list2.head)