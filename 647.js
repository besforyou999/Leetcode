function countSubstrings(s) {
    let count = 0;
    for (let i = 0 ; i < s.length ; i++) {
        helper(i,i);
        helper(i, i+1);
    }
    return count;
    
    function helper(l,r) {
        while( l >= 0 && r < s.length && s[l] == s[r]) {
            count++;
            l--;
            r++;
        }
    }
};
