var minPairSum = function(nums) {
    let n = nums.length; 
    nums.sort((a,b) => a - b);
    
    let ans = -1;

    for (let i = 0 ; i < n ; i++) {
        let temp = nums[i] + nums[n - 1 - i];
        if (temp > ans) ans = temp;
    }

    return ans;
};