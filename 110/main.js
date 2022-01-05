var isBalanced = function(root) {
    
    var ans = true;
    
    let dfs = function(root) {
        if (!root) return 0;
        if (!ans)  return 0;
        let left  = dfs(root.left);
        let right = dfs(root.right);
        if (Math.abs(left - right) > 1) ans = false;
        return 1 + Math.max(left, right);
    }
    
    dfs(root);
    
    return ans;
};
