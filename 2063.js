var countVowels = function(word) {
   let ans = 0 , n = word.length;
    
    for (let i = 0 ; i < n ; i++) 
        if ( "aeiou".indexOf(word.charAt(i)) >= 0)
            ans += (i + 1) * (n - i);
    
    return ans;
};
