var hasPathSum = function(root, targetSum) {
    
    let ans = false;
    let dfs = function(root, sum) {
        if (!root) return ;
        
        sum += root.val;
        
        if ( sum == targetSum && !root.left && !root.right) {
            ans = true;
            return;
        }
        
        dfs(root.left, sum);
        dfs(root.right, sum);
    }
    
    dfs(root, 0)
    
    return ans;
};
