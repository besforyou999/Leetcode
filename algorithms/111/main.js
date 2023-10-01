var minDepth = function(root) {
    
    let min = 100000;
    
    let dfs = function(root, depth) {
        if(!root) 
            return;
        
        if(!root.left && !root.right) 
            if ( min > depth ) 
                min = depth;
        
        dfs(root.left, depth + 1);
        dfs(root.right, depth + 1);
    }
    
    if ( root == null )
        return 0;
    
    dfs(root,1);
    
    return min;
};
