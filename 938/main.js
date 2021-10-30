var rangeSumBST = function(root, low, high) {
  
    if ( root == null )
        return 0;
    
    if (root.val < low || root.val > high ) {
        return rangeSumBST(root.left , low, high) + rangeSumBST(root.right, low, high);
    }
    
    return root.val + rangeSumBST(root.left , low, high) + rangeSumBST(root.right, low, high);
    
};


