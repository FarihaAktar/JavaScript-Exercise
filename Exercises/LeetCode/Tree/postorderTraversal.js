class TreeNode {
    constructor(val, left, right) {
        this.val = val,
            this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
node1.right = node2;
node2.left = node3;

// const arr = [node1]
// console.log(arr.pop())

const postorOrderTraversal = (root) => {
    if (!root) {
        return null
    }
    let stack = [root];
    let res = [];
    let traverseArr = [];
    while (stack.length) {
        let node = stack.pop();
        res.push(node.val);

        if (node.right) {
            stack.push(node.right)
        }
        if (node.left) {
            stack.push(node.left)
        }
    }
    // for (let i = 0; i < res.length; i++) {

    // }
    while(res.length){
        const max = Math.max(...res);
        traverseArr.push(max);
        res.pop(max);
    }
    return traverseArr
}

const result = postorOrderTraversal(node1);

console.log(result)

// const new1 = [1,2,4];
// const v = Math.max(...new1)
// console.log(new1.pop(v))
// console.log(new1)