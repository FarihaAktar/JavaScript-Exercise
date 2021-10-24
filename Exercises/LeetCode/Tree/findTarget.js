class TreeNode {
    constructor(val, left, right) {
        this.val = val,
            this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(5);
const node4 = new TreeNode(4);
node1.left = node2;
node1.right = node3;
node2.left = node4;

const findTarget = (root, k) =>{
    const arr = [];
    const myMap = new Map();

    // console.log(myMap)

    const inOrder = (node) =>{
        if(!node){
            return;
        }
        inOrder(node.left);
        arr.push(node.val)
        inOrder(node.right)
    }

    inOrder(root)
    // console.log(arr)
    const twoSum = (arr) =>{
        for(let i=0; i< arr.length; i++){
            const anotherValue = k - arr[i];
            if(myMap.has(anotherValue)){
                return true
            }
            myMap.set(arr[i], i)
            // console.log(myMap)
        }
        return false
    }

    return twoSum(arr);
}

const res = findTarget(node1, 9);

console.log(res)