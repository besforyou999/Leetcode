var balanceBST = function(root) {
    function inOrder(MyRoot) {
        if(!MyRoot) return [];
        return [...inOrder(MyRoot.left), MyRoot.val, ...inOrder(MyRoot.right)];
    }

    const sortedArr = inOrder(root);

    function constructTree(arr) {
        if(!arr.length) return null;
        const mid = Math.floor(arr.length / 2);
        const node = new TreeNode(arr[mid]);
        node.left = constructTree(arr.slice(0, mid));
        node.right = constructTree(arr.slice(mid+1));
        return node;
    }

    return constructTree(sortedArr);
};
