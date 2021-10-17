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

node2.next = node4;
node1.next = node3;

const list1 = new LinkedList(node1);
const list2 = new LinkedList(node2);

const mergeTwoList = (l1, l2) => {
    let listNode = new ListNode(null);
    let prev= listNode;

    while(l1 !== null && l2 !== null){
        if(l1.val <= l2.val){
            prev.next = l1;
            l1 = l1.next
        }else{
            prev.next = l2;
            l2 = l2.next
        }
        prev = prev.next
    }

    if(l1 === null){ prev.next = l2}
    if(l2 === null){ prev.next = l1}

    console.log(listNode.next)
}

const res = mergeTwoList(list1.head, list2.head);

console.log(res)