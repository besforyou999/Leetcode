var checkIfPangram = function(sentence) {
    
    var arr = Array(26).fill(0);
        
    let count = 26;

    for (let i = 0 ; i < sentence.length ; i++) {
        let letter = sentence.charCodeAt(i);
        if (96 < letter < 123 && arr[letter-97] == 0) {
            arr[letter-97] = 1;
            count -= 1;
        }
    }

    if (count == 0) return true;

    return false;
};
