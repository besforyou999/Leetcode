var smallerNumbersThanCurrent = function(nums) {
    
    var obj = {};
    var ans = [];
    for (let i = 0 ; i < nums.length ; i++) {
        if(!obj[nums[i]]) obj[nums[i]] = 1;
        else {
            obj[nums[i]] += 1;
        }
    }
    
    for (let i = 0 ; i < nums.length ; i++) {
        let current = nums[i];
        let count = 0;
        for (let j = 0 ; j < current ; j++) {
            if (obj[j]) {
                count += obj[j];
            }
        }
        ans.push(count);
    }
    
    return ans;
};