// version 1

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

// better version 2

var findDuplicates = function(nums) {

    let len = nums.length
    let arr = new Array(len+1).fill(0)
    let ans = [];

    for (let i = 0 ; i < len ; i++) {
        let num = nums[i];
        if (arr[num] == 0) arr[num] = 1;
        else if (arr[num] == 1) ans.push(num);
    }

    return ans;
}


