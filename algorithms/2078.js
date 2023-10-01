var maxDistance = function(colors) {
    let max = -1;
    for (let i = 0 ; i < colors.length ; i++) {
        let startColor = colors[i];
        let mostFar = -1;
        for (let j = i + 1 ; j < colors.length ; j++) {
            if (colors[j] != startColor) {
                mostFar = j - i;
            }
        }
        max = Math.max(max, mostFar);
    }
    return max;
};

let colors = [1,1,1,6,1,1,1];

let ans = maxDistance(colors);

console.log(ans);