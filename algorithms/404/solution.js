var sumOfLeftLeaves = function(root) {
    
    q = [{node: root, type: 'root'}]
    let sum = 0;
    while ( q.length != 0 ) {
        let { node, type } = q.shift();
        if ( node.left === null && node.right === null ) {
            if ( type === 'left' ) {
                sum += node.val;
            }
        } else {
            if ( node.left !== null ) {
                q.push({node: node.left, type: 'left'})
            }
            if ( node.right !== null ) {
                q.push({node: node.right, type: 'right'})
            }
        }
    } 
    return sum;
};
