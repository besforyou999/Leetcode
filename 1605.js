var restoreMatrix = function(rowSum, colSum) {
    let m = rowSum.length;
    let n = colSum.length;

    let mat = new Array(m);

    for (let i = 0 ; i < m ; i++) {
        mat[i] = new Array(n);
    }

    for(let i = 0 ; i < m ; i++) {
        for (let j = 0 ; j < n ; j++) {
            mat[i][j] = Math.min(rowSum[i], colSum[j]);
            rowSum[i] -= mat[i][j];
            colSum[j] -= mat[i][j];
        }
    }
    
    return mat;
}


