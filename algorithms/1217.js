var minCostToMoveChips = function(position) {
    let odds = 0, evens = 0;

    position.forEach(element => {
        if (element % 2 == 0 ) evens += 1;
        else odds += 1;
    });
    return Math.min(odds, evens);
};
