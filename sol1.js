let applier = function(lang, field, career, food, score) {
    this.lang = lang;
    this.field = field;
    this.career = career;
    this.food = food;
    this.score = score;
}

let properties = ["lang","field","career","food","score"];

function solution(info, query) {
    let answer = [], applicants = [], queries = [];

    // insert application data to array
    info.forEach( function(element) {
        insertApplicants(applicants, element);
    });

    // split queries into array
    query.forEach( function(element) {
        queries.push(splitQuery(element));
    });

    // sort applicant data by score ( acsc )
    //applicants.sort((a,b) => a.score - b.score);

    // count applications that matches the query
    queries.forEach( function(element) {
        answer.push(respondQuery(applicants,element));
    })

    return answer;
}

function respondQuery(arr, query) {
    let applications = arr.slice();
    for (let i = 0 ; i < query.length - 1; i++) {
        if (query[i] == '-') continue;
        let next_applications = [];
        for (let j = 0 ; j < applications.length ; j++) {
            let applicant = applications[j];
            if( query[i] == applicant[properties[i]] ) next_applications.push(applicant);
        }
        applications = next_applications.slice();
    }

    applications.sort((a,b) => a.score - b.score);

    let score = query[4];
    let lower_score = 0;

    for (let i = 0 ; i < applications.length ; i++) {
        let applicant = applications[i];
        if ( Number(score) <= Number(applicant[properties[4]]) ) { 
            break;
        } else
            lower_score += 1;
    }

    return applications.length - lower_score;
}

/*
input   : empty array, applicants data array
output  : array with application data
TC      : O(N) ( n <= 50,000 )
*/
function insertApplicants(arr, token) {
    let tokens = token.split(' ');
    arr.push( new applier(tokens[0], tokens[1], tokens[2], tokens[3], tokens[4]) );
}

/*
input   : query string 
output  : array with query letters
TC      : O(N) ( n <= 5 )
*/
function splitQuery(token) {
    token = token.split(' ');

    for (let i = 0 ; i < token.length ; i++) 
        if (token[i] == "and" ) token.splice(i,1);
    
    return token;
}


let info = ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"];
let query = ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"];

console.log(solution(info, query));