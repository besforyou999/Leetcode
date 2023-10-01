var maximumUnits = function(boxTypes, truckSize) {
    
    boxTypes.sort( (a, b) => b[1] - a[1] );

    let ans = 0;

    console.log(boxTypes);

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

let boxTypes = [[1,3],[2,2],[3,1]];
let truckSize = 4;

console.log(maximumUnits(boxTypes, truckSize));