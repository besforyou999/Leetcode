var kthDistinct = function(arr, k) {
    
    const freq = {};
    const obj = [];
    
    for (let c of arr) {
        freq[c] = ( freq[c] || 0 ) + 1;
    }

    for (let i = 0 ; i < arr.length ; i++) {
        if (freq[arr[i]] == 1 ) {
            obj.push(arr[i]);
        } 
    }
    
    if ( k > obj.length ) return "";
    return obj[k-1];
    
};