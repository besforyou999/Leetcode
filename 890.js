var findAndReplacePattern = function(words, pattern) {
    let ans = [];
    let patternValue = [];
    const patternMap = new Map();
    
    for (let i = 0 ; i < pattern.length ; i++) {
        let letter = pattern.charAt(i);
        if (!patternMap.has(letter)) {
            patternMap.set(letter, patternMap.size);
            patternValue.push(patternMap.size);
        } 
        else if (patternMap.has(letter)) {
            let num = patternMap.get(letter);
            patternValue.push(num);
        }
    }
    
    for (let i = 0 ; i < words.length ; i++) {
        let word = words[i];
        const map = new Map();
        let wordsValue = [];
        for (let i = 0 ; i < word.length ; i++) {
            let letter = word.charAt(i);
            if (!map.has(letter)) { 
                map.set(letter, map.size);
                wordsValue.push(map.size);
            }
            else if (map.has(letter)) {
                let num = map.get(letter);
                wordsValue.push(num);
            }
        }
        if( JSON.stringify(patternValue) == JSON.stringify(wordsValue)) ans.push(word);
    }
    return ans;
};
