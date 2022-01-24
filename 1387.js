var getKth = function(lo, hi, k) {
    
    let arr = new Array(hi - lo + 1);
    let idx = 0;
    
    for(let i = lo ; i <= hi ; i++) { 
        var powValue = calcPowerValue(i);
        arr[idx++] = [powValue, i];    
    }
    
    function calcPowerValue(n) {
        let steps = 0;
        while (n != 1) {
            if (n % 2 == 0) 
                n = n / 2;
            else 
                n = 3 * n + 1;
            steps += 1;
        } 
        return steps;
    }
    
    arr.sort(function(a,b) {
        return a[0] - b[0];
    });
    
    return arr[k-1][1];
};
