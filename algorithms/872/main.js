var leafSimilar = function(root1, root2) {
    
    let result1 = [], result2 = [];
    
    result1 = makeSeq(root1);
    result2 = makeSeq(root2);
    
    if (result1.length != result2.length)
        return false;
        
    for ( let i = 0; i < result1.length ; i++ ) {
        if (result1[i] != result2[i])
            return false;        
    }
    
    return true;
};


let makeSeq = function(root) {    
    let result = [];    
    let dfs = function(root) {        
        if (!root) return;        
        if (!root.left && !root.right ) {
            result.push(root.val);        
        }        
        dfs(root.left);
        dfs(root.right);
    }        
    dfs(root);    
    return result;
}; 
    


var getLeaf = function(root, ary) {
    if(!root) return;
    if(!root.left && !root.right) {
        ary.push(root.val);
    }
    getLeaf(root.left, ary);
    getLeaf(root.right, ary);

}


