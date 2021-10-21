class TreeNode {
    constructor(val, left, right){
        this.val = val,
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
node1.left = node2;
node1.right = node3;

// console.log(node1)

const invertTree = (root) =>{
    if(!root){
        return []
    }

    const node = new TreeNode();

    node.val = root.val;
    node.left = invertTree(root.right);
    node.right = invertTree(root.left);
    return node;
}

const res = invertTree(node1);

console.log(res)