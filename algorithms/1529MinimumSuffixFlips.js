var minFlips = function(target) {
    let cnt = 0 , state = 0;

    for (let i = 0 ; i < target.length ; i++) {
        if ( target[i] - '0' != state) { 
            state = target[i] - '0';
            cnt += 1;
        } 
    }
    return cnt;
};