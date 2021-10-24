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
const node4 = new TreeNode(4);
node1.left = node2;
node1.right = node3;
node2.left = node4;


const searchBST = (root, val) => {

    if (root === null) {
        return null;
    }
    if (root.val === val) {
        return root
    }
    else if (val < root.val) {
        // console.log('root', root.val)
        return searchBST(root.left, val)
    }
    else {
        return searchBST(root.right, val)
    }

}

const res = searchBST(node1, 2);

console.log(res)