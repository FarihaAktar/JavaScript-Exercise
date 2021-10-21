// not complete !!!!!!!!
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

const inOrderTraversal = (root) => {
    const res = [];
    if (!root) {
        return res;
    }

    const queue = [];
    queue.push(root);

    // const node = queue.shift()
    // console.log(node)

    // console.log(queue)
    // const {length} = queue;
    // console.log(length)
    while (queue.length > 0) {
        const { length } = queue;
        const temp = [];
        for (let i = 0; i < length; i++) {
            const node = queue.shift();
            temp.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(temp);
    }
    return res;
}

const result = inOrderTraversal(node1);

console.log(result)


