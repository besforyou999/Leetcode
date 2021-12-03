// Time : O(N), space : O(1)
var singleNumber = function(nums) {

    let num = nums[0];

    for (let i = 1 ; i < nums.length ; i++) num ^= nums[i];

    return num;
};

// Time : O(N) , space : O(N)
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
