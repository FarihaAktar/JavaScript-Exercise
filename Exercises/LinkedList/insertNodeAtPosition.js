class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

let node1 = new Node(1);
let node2 = new Node(2)
let node3 = new Node(3)

node2.next = node3
node1.next = node2
// console.log(node1)
// node1 = node2
// console.log(node2)

const list = new LinkedList(node1)
// console.log(list)

// function for getting the pointer
const getAt = (index) => {
    let counter = 0;
    let node = list.head;
    while (node) {
        if (counter === index) {
            return node;
            // console.log(node)
        }
        counter++;
        node = node.next;
        console.log(counter)
        console.log(node)
    }
    return node;
}

const insertNodeAtPosition = (head, data, index)=>{
    if(!head){
        head = new Node(data)
        console.log(head)
    }
    if(index === 0){
        head = new Node(data)
        console.log(head)
    }
    const pointer = getAt(index -1)
    // const pointer = head
    console.log(pointer)
    let newNode = new Node(data);
    // console.log(newNode)
    // console.log(pointer.next)
    newNode.next = pointer.next;
    // console.log(newNode)
    pointer.next = newNode;
    // console.log(pointer)
    console.log(head)
}


// insertNodeAtpointer(list.head, 5, 2)


const insertNodeAtPosition1 = (head, data, index)=>{
    const newNode = new Node(data);
    if(!head){
        head = newNode
    }
    if(index === 0){
        newNode.next = head
        head = newNode
    }
    let counter = 1;
    let pointer = head
    while(pointer.next !== null){
        if(counter === index){
            newNode.next = pointer.next;
            pointer.next = newNode;
            break
        }
        counter++;
        console.log(pointer, counter)
        pointer= pointer.next
    }

    console.log(head)
}


insertNodeAtPosition1(list.head, 5, 1)

