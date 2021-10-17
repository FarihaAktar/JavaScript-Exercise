class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}



const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

node2.next = node3;
node1.next = node2;

const list1 = new LinkedList(node1);

const removeElements = (head, val) => {
    let current = head;
    let prev = null;
    while (current !== null) {
        if (current.val === val) {
            if (prev === null) {
                head = current.next;
            } else {
                prev.next = current.next
            }

        } else {
            prev = current;
        }
        current = current.next

    }
    // console.log(head)
    return head;

}

const res = removeElements(list1.head, 1)