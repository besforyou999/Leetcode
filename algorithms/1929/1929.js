// one liner
var getConcatenation = function(nums) {
	//spread the nums array twice and return it
    return [...nums,...nums]
};

// O(n)
var getConcatenation = function(nums) {
    let n = nums.length;
    let ans = new Array(n * 2);
    for (let i = 0 ; i <  n ; i++) {
        ans[i+n] = ans[i] = nums[i];
    }
    return ans;
};
