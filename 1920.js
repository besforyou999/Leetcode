var buildArray = function(nums) {
    
    var number = new Array(nums.length);
    
    for (let i = 0 ; i < nums.length ; i++) {
        number[i] = nums[nums[i]];
    }
    
    return number;
    
};
