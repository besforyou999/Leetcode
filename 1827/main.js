var minOperations = function(nums) {
    
    let len = nums.length;
    if ( len == 1 ) return 0;
    let ans = 0;
    for ( let i = 1 ; i < len ; i++ ) {
        if (nums[i-1] < nums[i] )             
            continue;
        let temp = nums[i-1] - nums[i] + 1;
        ans += temp;
        nums[i] += temp;
    }
    return ans;
};
