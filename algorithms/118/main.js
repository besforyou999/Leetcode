var generate = function(numRows) {
    
    let mat = [];
    
    for ( let i = 0 ; i < numRows ; i++ ) {
        mat[i] = [];
        mat[i][0] = 1;
        for ( let j = 1 ; j < i ; j++ ) {
                mat[i][j] = mat[i-1][j] + mat[i-1][j-1];
        }
        mat[i][i] = 1;
    }

    return mat;
};


