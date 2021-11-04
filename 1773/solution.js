var countMatches = function(items, ruleKey, ruleValue) {
    
    let index;
    
    if ( ruleKey == "type" ) {
        index = 0;
    } else if ( ruleKey == "color" ) {
        index = 1;
    } else if ( ruleKey == "name" ) {
        index = 2;
    }
    
    let ans = 0;
    
    for ( let i = 0 ; i < items.length ; i++ ) {
        if ( items[i][index] == ruleValue ) {
            ans += 1;
        }
    }
    
    return ans;
};
