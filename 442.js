var findDuplicates = function(nums) {
    
    const mySet = new Set();
    
    let ans = [];
    
    for (let i = 0 ; i < nums.length ; i++) {
        let num = nums[i];
        if(!mySet.has(num)) mySet.add(num);
        else if (mySet.has(num)) ans.push(num);
    }
    
    return ans;
};
