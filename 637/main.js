var averageOfLevels = function(root) {
    let queue = [root], result = [];
    
    while (queue.length) {
        let qlen = queue.length, sum = 0;
    
        for (let i = 0; i < qlen ; i++ ) {
            let current = queue.shift();
            sum += current.val;
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        result.push(sum/qlen);
    }    
    return result;
};


