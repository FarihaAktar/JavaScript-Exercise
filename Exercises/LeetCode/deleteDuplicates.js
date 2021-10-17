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
const node2 = new ListNode(3);
const node3 = new ListNode(3);
const node4 = new ListNode(3);

node3.next = node4;
node2.next = node3;
node1.next = node2;

const list1 = new LinkedList(node1);

const deleteDuplicates = (head) => {
    if(!head){
        return null
    }
    let node = head;
    while(node){

        if(node.next && node.val === node.next.val){
            node.next = node.next.next;

        }else{
            node = node.next;
        }

    }
    // console.log(head)
}

const res = deleteDuplicates(list1.head);

console.log(res)