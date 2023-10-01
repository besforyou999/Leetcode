var arrayPairSum = function(nums) {
    nums.sort( function(a, b) {
        return a - b;
    });
    console.log(nums);
    let answer = 0;
    for(let i = 0 ; i < nums.length ; i += 2) {
        let ai = nums[i];
        answer += ai;
    }
    return answer;
};


let nums = [6214, -2290, 2833, -7908];

arrayPairSum(nums);