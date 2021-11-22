var getConcatenation = function(nums) {
    let n = nums.length;
    let ans = new Array(n * 2);
    for (let i = 0 ; i <  n ; i++) {
        ans[i+n] = ans[i] = nums[i];
    }
    return ans;
};
