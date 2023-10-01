var canBeTypedWords = function(text, brokenLetters) {
    
    const mySet = new Set();
    
    for (let i = 0 ; i < brokenLetters.length ; i++) {
        mySet.add(brokenLetters.charAt(i));
    }
    
    const wordArr = text.split(' ');
    
    let ans = 0;
    
    for (let i = 0 ; i < wordArr.length ; i++) {
        let word = wordArr[i];
        let check = true;
        for (let j = 0 ; j < word.length ; j++) {
            let letter = word.charAt(j);
            if (mySet.has(letter)) {
                check = false;
                break;
            }
        }
        if (check) ans++;
    }
    return ans;
};
