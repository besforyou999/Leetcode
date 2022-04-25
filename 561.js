var arrayPairSum = function(nums) {
    nums.sort( function(a, b) {
        return a - b;
    });
    let answer = 0;
    for(let i = 0 ; i < nums.length ; i += 2) {
        let ai = nums[i];
        answer += ai;
    }
    return answer;
};
