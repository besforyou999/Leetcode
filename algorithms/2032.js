var twoOutOfThree = function(nums1, nums2, nums3) {
    
    const totalSet = new Set();
    const set1 = new Set();
    const set2 = new Set();
    const set3 = new Set();
    const ans = [];
    
    for (let i = 0 ; i < nums1.length ; i++) {
        let num = nums1[i];
        totalSet.add(num);
        set1.add(num);
    }
    
    for (let i = 0 ; i < nums2.length ; i++) {
        let num = nums2[i];
        totalSet.add(num);
        set2.add(num);
    }
    
    for (let i = 0 ; i < nums3.length ; i++) {
        let num = nums3[i];
        totalSet.add(num);
        set3.add(num);
    }
    
    for (let item of totalSet) {
        let count = 0;
        if (set1.has(item))count++;
        if (set2.has(item))count++;
        if (set3.has(item))count++;
        if (count >= 2) ans.push(item);
    }
    return ans;
};
