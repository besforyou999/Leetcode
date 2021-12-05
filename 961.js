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
