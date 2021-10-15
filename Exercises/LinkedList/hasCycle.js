class DoublyLinkedList {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}


const node1 = new DoublyLinkedList(1);
const node2 = new DoublyLinkedList(2);
const node3 = new DoublyLinkedList(3);


node3.next = node1
node3.prev = node2;
node2.next = node3;
node2.prev = node1;
node1.next = node2;

const hasCycle = (head) => {
    if(!head){
        return head;
    }
    let f = head;
    let s = head;
    while(f !== null){
        f = f.next;
        // console.log(f)
        if(f){
            f = f.next
            s = s.next
            // console.log(f)
            if(f === s){
                return 1
            }
        }
    }
    return 0;
}

// const res = hasCycle(node1)
// console.log(res)
hasCycle(node1)

// not finished ***
