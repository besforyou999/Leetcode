var binaryTreePaths = function(root) {
    
    let paths = [];
    
    function dfs(root, cur) {
        if (!root) return;
        if (!root.left && !root.right) {
            paths.push(cur + root.val);
            return ;
        }
        dfs(root.left, cur + root.val + "->");
        dfs(root.right, cur + root.val + "->");
    }
    
    dfs(root, "");
         
    return paths;
};
