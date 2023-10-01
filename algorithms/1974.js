/**
 * @param {string} word
 * @return {number}
 */
function calcMin(current, target) {
    const letters = 26;
    let diff = Math.abs(current.charCodeAt(current) - target.charCodeAt(target));
    let diff2 = Math.abs(letters - diff);
    return Math.min(diff, diff2);
}

var minTimeToType = function(word) {
    let time = 0;
    
    let currentLetter = 'a';

    for (let i = 0 ; i < word.length ; i++) {
        if (word[i] == currentLetter) time += 1;
        else {
            time += ( calcMin(currentLetter, word[i]) + 1);
            currentLetter = word[i];
        }
    }
    return time;
};
