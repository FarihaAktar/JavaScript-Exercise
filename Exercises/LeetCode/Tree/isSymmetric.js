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
node1.right = node2;
// node2.left = node3;
node2.right = node4;

// console.log(node1)

const isSymmetric = (root) =>{
    if (!root) return true;
    return helper(root.left, root.right);
}

const helper = function (p, q) {
    if ((!p && q) || (p && !q) || (p && q && p.val !== q.val)) return false;
    if (p && q) {
        console.log( "p",p, 'q',q)
        return helper(p.left, q.right) && helper(p.right, q.left);
    } 
    return true;
  };


const res = isSymmetric(node1)
console.log(res)