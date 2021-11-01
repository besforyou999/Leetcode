var isBalanced = function(root) {    
    let ans = true;    
    let dfs = function(root) {
        
        if(!root) return 0;
        if(!ans) return 0;
        
        let leftTree = dfs(root.left);
        let rightTree = dfs(root.right);
        
        if (Math.abs(leftTree - rightTree) > 1) ans = false;    
        
        return 1 + Math.max(leftTree, rightTree);
    }     

    dfs(root);
    
    return ans;  
};


