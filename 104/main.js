var maxDepth = function(root) {
    if (root == null || root == undefined )
        return 0;
    
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
