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


// my solution using Map
var numJewelsInStones = function(jewels, stones) {

    var dic = new Map();
    var ans = 0, letter;

    for (let i = 0 ; i < jewels.length ; i++) {
        letter = jewels[i];
        if (!dic.has(letter)) dic.set(letter, 1);
    }

    for (let i = 0 ; i < stones.length ; i++) {
        letter = stones[i];
        if (dic.has(letter)) ans += 1;
    }

    return ans;
};


// best solution
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
