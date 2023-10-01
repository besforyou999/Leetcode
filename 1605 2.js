var matrixScore = function(grid) {
    let m = grid.length;
    let n = grid[0].length;

    for (let i = 0 ; i < m ; ++i) {
        if (grid[i][0] == 0) {
            for (let j = 0 ; j < n ; ++j) {
                grid[i][j] ^= 1;
            }
        }
    }

    for (let i = 1 ; i < n ; ++i) {
        let zeroNum = 0;
        for (let j = 0 ; j < m ; ++j) {
            zeroNum += grid[j][i];
        }
        if (zeroNum <= (m>>1)) {
            for (let j = 0 ; j < m ; ++j) {
                grid[j][i] ^= 1;
            }
        }
    }

    let ans = 0;

    for (let i = 0 ; i < m ; ++i) {
        let str = "";
        for (let j = 0 ; j < n ; ++j) {
            str = grid[i][j].toString() + str;
        }
        console.log(str);
        ans += parseInt(str,2);
    }
    return ans;
};

let grid = [[0,1],[1,1]]

console.log(matrixScore(grid));