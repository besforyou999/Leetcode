var maxDepth = function(root) {
    
    var maxDepth = 0;
    
    function solve(root, depth) {
        if (!root) return;
        
        if (depth > maxDepth) maxDepth = depth;
        
        solve(root.left, depth + 1);
        solve(root.right, depth + 1);
    }
    
    solve(root, 1);
    
    return maxDepth;
};
