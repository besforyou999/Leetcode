/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    
    const map = new Map();
    
    let len = arr.length;
    
    for (const num of arr) {
        if (!map.has(num)) map.set(num, 1);
        else {
            let n = map.get(num);
            map.set(num, n+1);
        }
    }
    
    let arr2 = []
    
    for (const num of map.values()) {
        arr2.push(num);
    }
    
    arr2.sort(function(a,b) {
        return b - a;
    });
    
    let ans = 0;
    let sum = 0;
    for (let i = 0 ; i < arr2.length ; i++) {
        sum += arr2[i];
        ans += 1;
        if (sum >= len / 2) break;
    }
    
    return ans;
};
