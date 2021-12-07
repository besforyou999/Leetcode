var bstToGst = function(root) {
    let prev = 0;
    help(root);
    function help (root) {
        if (root.right != null) help(root.right);
        prev = root.val = prev + root.val;
        if (root.left != null) help(root.left);
        return root;
    }
    return root;
};
