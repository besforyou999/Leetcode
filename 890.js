var findAndReplacePattern = function(words, pattern) {
    let ans = [];
    let patternValue = [];
    const patternMap = new Map();
    
    for (let i = 0 ; i < pattern.length ; i++) {
        let letter = pattern.charAt(i);
        if (!patternMap.has(letter)) patternMap.set(letter, 1);
        else if (patternMap.has(letter)) {
            let num = patternMap.get(letter);
            patternMap.set(letter, ++num);
        }
    }
    
    for (const value of patternMap.values()) patternValue.push(value);
    
    
    for (let i = 0 ; i < words.length ; i++) {
        let word = words[i];
        const map = new Map();
        let wordsValue = [];
        for (let i = 0 ; i < word.length ; i++) {
            let letter = word.charAt(i);
            if (!map.has(letter)) map.set(letter, 1);
            else if (map.has(letter)) {
                let num = map.get(letter);
                map.set(letter, ++num);
            }
        }
        
        for (const value of map.values()) wordsValue.push(value);
        
        if( JSON.stringify(patternValue) == JSON.stringify(wordsValue)) {
            ans.push(word);
        } 
        
    }
    return ans;
};
