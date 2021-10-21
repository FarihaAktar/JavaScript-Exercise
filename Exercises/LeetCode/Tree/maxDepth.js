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
node1.right = node2;
node2.right = node3;
node3.right = node4;

// console.log(node1)

const maxDepth = (root)=>{
   return maxLevel(root, 0)
}

const maxLevel = (root, level)=>{
    if(!root) return level;
    else {
        console.log('level',level)
        console.log('node left',root.left)
        const depth = Math.max(maxLevel(root.left, level +1), maxLevel(root.right, level+1));
        return depth;
    }
}

const res = maxDepth(node1);
console.log(res)