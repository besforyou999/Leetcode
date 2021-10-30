var runningSum = function(nums) {
   
    let prevNum = nums[0];
    
    for ( let i = 1 ; i < nums.length ; i++ ) {
        nums[i] = prevNum + nums[i];
        prevNum = nums[i];
    }
    
    return nums;
  
};
