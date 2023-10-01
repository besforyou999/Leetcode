// array

var repeatedNTimes = function(nums) {
    
    let n = nums.length / 2;
    
    let arr = new Array(10001).fill(0);
    
    for (const num of nums) {
        arr[num] += 1;
        if (arr[num] == n) return num;
    }
};

// map
var repeatedNTimes = function(nums) {
    
    const map = {};
    
    let n = nums.length / 2;
    
    for (const num of nums) {
        if (map[num] == null) map[num] = 1;
        else {
            map[num] += 1;
            if (map[num] == n) return num;
        }
    }
    
};
