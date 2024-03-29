function makeCarFee(carNumber, fee) {
    return {
        carNumber: carNumber,
        fee: fee
    };
}

function calcFee(fees, sumTime) {
    let basicTime = Number(fees[0]);
    let basicFee  = Number(fees[1]);
    let unitTime  = Number(fees[2]);
    let unitFee   = Number(fees[3]);
    let fee;
    if (sumTime <= basicTime) fee = basicFee;
    else {
        fee = basicFee + Math.ceil( (sumTime - basicTime) / unitTime ) * unitFee;
    }
    return fee;
}

function timeToMin(time) {
    const token = time.split(":");
    const hour  = Number(token[0]);
    const min   = Number(token[1]);
    return 60 * hour + min;
}

function solution(fees, records) {
    const answer            = [];
    const parkingTimeList   = [];
    const map               = new Map();
    const parkingTimeMap    = new Map();

    records.forEach(element => {
        let token     = element.split(" ");
        let time      = timeToMin(token[0]);
        let carNumber = token[1];
        let action    = token[2];

        if (action == "IN") {
            map.set(carNumber, time);
        } else {
            let inTime = map.get(carNumber);
            map.delete(carNumber);
            if (parkingTimeMap.has(carNumber)) {
                let temp = parkingTimeMap.get(carNumber);
                parkingTimeMap.set(carNumber, temp + (time - inTime));
            } else {
                parkingTimeMap.set(carNumber, (time - inTime));
            }
        }
    });

    console.log(map);

    for (let carNumber of map.keys()) {
        let inTime  = map.get(carNumber);
        let outTime = timeToMin("23:59");
        map.delete(carNumber);
        let temp = 0;
        if (parkingTimeMap.has(carNumber)) temp = parkingTimeMap.get(carNumber);
        parkingTimeMap.set(carNumber, temp + (outTime - inTime));
    }

    console.log(parkingTimeMap)

    
    for (let carNumber of parkingTimeMap.keys()) {
        let fee = calcFee(fees, parkingTimeMap.get(carNumber));
        parkingTimeList.push(makeCarFee(carNumber, fee));
    }

    parkingTimeList.sort((a,b) => {
        return a.carNumber - b.carNumber;
    });

    parkingTimeList.forEach(item =>{
        answer.push(item.fee);
    })
    
    return answer;
}

let fees = [1, 461, 1, 10];
let records = ["00:00 1234 IN"];

console.log(solution(fees, records));


