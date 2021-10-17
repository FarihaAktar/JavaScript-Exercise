class LinkedList {
    constructor(data) {
        this.data = data
        this.next = null
    }
}


const node1 = new LinkedList(1);
const node2 = new LinkedList(2);
const node3 = new LinkedList(3);


node3.next = node1
node2.next = node3;
node1.next = node2;

// console.log(node1)

const hasCycle = (head) => {
    // if(head === null || head.next === null){
    //     return false
    // }
    // let slow = head.next;
    // let fast = head.next.next;
    // while(slow !== fast){
    //     slow = slow.next;
    //     // console.log('slow', slow)
    //     if(fast === null || fast.next === null){
    //         return false;
    //     }
    //     // console.log('fast', fast)
    // }
    // return true;

    if(!head) {
        return false;
    }
    let hare = head;
    let tortoise = head;
    while(hare) {
        if(!hare.next) {
            return false;
        } else {
            hare = hare.next.next;
            tortoise = tortoise.next;
            // console.log('hare', hare)
            // console.log('tortoise', tortoise)
        }
        if(tortoise == hare) {
            return true;
        }
    }
    return false;
}

const res = hasCycle(node1);

console.log(res)