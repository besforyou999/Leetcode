var maximumUnits = function(boxTypes, truckSize) {
    
    boxTypes.sort( (a, b) => b[1] - a[1] );

    let ans = 0;

    for (let i = 0 ; i < boxTypes.length ; i++) {
        let curr    = boxTypes[i];
        let boxNum  = curr[0];
        let boxUnit = curr[1];
        
        if ( truckSize > boxNum ) {
            truckSize -= boxNum;
            ans += ( boxNum * boxUnit );
        } else if ( truckSize <= boxNum ) {
            ans += ( truckSize * boxUnit );
            break;
        }
    }

    return ans;
};
