// O(N)
var diagonalSum = function(mat) {
    
    let sum = 0;
    let len = mat.length;
    let l = 0;
    let r = len - 1;
    for (let i = 0 ; i < len ; i++) {
        sum += mat[i][l];
        sum += mat[i][r];
        if (l == r) sum -= mat[i][l];
        l++;
        r--;
    }
    
    return sum;
};
