var singleNumber = function(nums) {
    
    const map = {};
    for (const n of nums) {
        if (map[n] == null){ 
            map[n] = 0;
        }
        else
            map[n]++;
    }
    
    for (const n of nums) 
        if (map[n] == 0) return n;
};
