var numJewelsInStones = function(jewels, stones) {
    
    var obj = {};
    var count = 0;
    for (let i = 0; i < jewels.length ; i++)
        obj[jewels[i]] = true;
    
    for (let i = 0 ; i < stones.length ; i++) {
        if (obj[stones[i]])
            count++;
    }
    
    
    return count;
};