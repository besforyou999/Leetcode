var diStringMatch = function(s) {
    let len = s.length;
    let answer = new Array(len + 1);
    let lp = 0 , rp = len;

    for (let i = 0 ; i < len ; i++) {
        let ch = s[i];
        if ( ch == "I" ) {
            answer[i] = lp;
            lp += 1;
        } else if ( ch == "D" ) {
            answer[i] = rp;
            rp -= 1;
        }
    }

    answer[len] = lp;
    return answer;
};
