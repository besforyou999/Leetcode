function countCloseBoxes(rows, columns, diag) {
    let count = 0;
    for (let i = 0 ; i < rows ; i++) {
        for (let j = 0 ; j < columns ; j++) {
            let X = (0.5 + (j * 1)).toFixed(1);
            let Y = (0.5 + (i * 1)).toFixed(1);
            let dist = calcDistance(X, Y, columns, rows);
            //console.log(dist);
            if (dist < diag) count += 1;
        }
    }
    return count;
}

function calcDistance(x, y, w, h) {
    let M = (h/w);
    let top = Math.abs(Number(M * x) + Number(y) + Number(h));
    let down = Math.sqrt(Math.pow(M,2) + 1);
    let dist = top / down;
    console.log(dist);
    return dist;
}

function solution(w, h) {
    let answer = w * h;

    const diag = 1 / Math.sqrt(2);
    console.log(diag);
    answer -= countCloseBoxes(h,w, diag);

    return answer;
}

console.log(solution(8, 12))