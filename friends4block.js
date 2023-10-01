function check4block(m,n,mat) {
    let coord =[]
    for (let i = 0 ; i < m - 1 ; i++) {
        for (let j = 0 ; j < n - 1 ; j++) {
            let ch = mat[i][j]
            if (ch == '0') continue;
            
            let right_ch = mat[i][j+1]
            let down_ch = mat[i+1][j]
            let diag_ch = mat[i+1][j+1]
            
            if (ch == right_ch && ch == down_ch && ch == diag_ch && 'A' <= ch && ch <= 'Z' ) {
                let item = [i,j]
                coord.push(item)
            }
        }
    }
    return coord
}

function delete4boxes( mat, coords) {
    coords.forEach( function(item) {
        let i = item[0]
        let j = item[1]
        mat[i][j] = mat[i][j+1] = mat[i+1][j] = mat[i+1][j+1] = '0'
    }); 
}



function make_mat(m, n, board) {
    let mat = [];
    for (let i = 0 ; i < m ; i++) {
        let row = []
        for (let j = 0 ; j < n ; j++) {
            row.push(board[i][j])
        }
        mat.push(row)
    }
    return mat
}

function concatMat(m, n, mat) {
    
    let cMat = []
    for (let i = 0 ; i < n ; i++) {
        let row = []
        for (let j = m - 1 ; j >= 0 ; j--) {
            if (mat[j][i] != '0') row.push(mat[j][i])
        }
        
        while (row.length < m ) row.push('0')

        cMat.push(row)
    }
    copyCMat(m, n, mat, cMat)
}

function copyCMat(m, n, mat, cMat) {
    
    for (let i = 0 ; i < m ; i++) {
        for (let j = 0 ; j < n ; j++) {
            mat[i][j] = cMat[j][m - i - 1]
        }
    }
    
}

function count_zero(m,n,mat) {
    let count = 0;
    for (let i = 0 ; i < m ; i++) {
        for (let j = 0 ; j < n ; j++) {
            if (mat[i][j] == '0') count += 1;
        }
    }
    return count;
}
// height : m , width : n
function solution(m, n, board) {
    var answer = 0;
    
    mat = make_mat(m, n, board)

    for (let i = 0 ; i < 200 ; i++) {

        let coords = check4block(m, n, mat)

        if (coords.length == 0) break;

        delete4boxes(mat, coords)

        concatMat(m, n, mat)

    }
    answer = count_zero(m, n, mat)

    return answer;
}

let m = 5
let n = 6
let board =  ["AAAAAA", "BBAATB", "BBAATB", "JJJTAA", "JJJTAA"]

console.log(solution(m, n, board))

