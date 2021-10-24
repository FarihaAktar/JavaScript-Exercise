class TreeNode {
    constructor(val, left, right) {
        this.val = val,
            this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

const node1 = new TreeNode(6);
const node2 = new TreeNode(3);
const node3 = new TreeNode(8);
const node4 = new TreeNode(1);
const node5 = new TreeNode(4);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;

const lowestCommonAncestor = (root, p, q) => {
    // if(root === null){
    //     return root
    // }
    // if(root.val < p && root.val < q){
    //     return lowestCommonAncestor(root.right, p, q)
    // }
    // if(root.val > p && root.val > q){
    //     // console.log(root.left)
    //     return lowestCommonAncestor(root.left, p, q)
    // }
    // if(root.val === p || root.val === q){
    //     return root
    // }
    // else{
    //     return root
    // }

    if (root === null)
        return root;
    if (p === root.val)
        return p;
    if (q === root.val)
        return q;

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    // console.log('left',left)
    // console.log('right',right)
    if (left !== null && right !== null){
        return root;
    }
    return left !== null ? left : right;
}

const res = lowestCommonAncestor(node1, 4, 1);

console.log(res)