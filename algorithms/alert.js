function solution(new_id) {
    var answer = '';
    
    // step 1
    new_id = new_id.toLowerCase();
    
    // step 2
    new_id = deleteUnwantedLetters(new_id);
    
    // step 3
    new_id = eraseDuplicatePoint(new_id);    

    // step 4
    new_id = trunkPoint(new_id);

    // step 5
    if (new_id == null) {
        new_id = "a";
    }

    // step 6
    if (new_id.length >= 16) {
        new_id = new_id.substring(0,14);
    }

    if (new_id[new_id.length-1] == '.') {
        new_id[new_id.length-1] = null;
    }

    // step 7
    if ( new_id.length <= 2 ) {
        let lastLetter = new_id[new_id.length-1];        
        while(new_id.length != 3) {
            new_id += lastLetter;
        }
    }


    return new_id;
}

function trunkPoint(id) {

    let strArr = id.split("");
    let len = strArr.length;
    let ans = '';
    if (strArr[0] == '.' ) {
        strArr[0] = 'A';
    }

    if ( strArr[len-1] == '.') {
        strArr[len-1] = 'A';
    }

    for (let i = 0 ; i < len ; i++) {
        if ( strArr[i] != 'A' ) {
            ans += strArr[i];
        }
    }

    return ans;
}

function eraseDuplicatePoint(id) {

    let strArr = id.split("");
    let pointer1 = 0;
    let pointer2 = 0;
    let ans = '';
    
    for ( let i = 0 ; i < strArr.length ; i++ ) {
        if ( strArr[i] == '.') {
            pointer1 = i;
            pointer2 = i;
            for ( let z = i ; z < strArr.length ; z++ ) {
                if ( pointer2 + 1 < strArr.length ) {
                    if ( strArr[pointer2+1] == '.') {
                        pointer2 += 1;
                    } else {
                        break;
                    }
                } else
                    break;
            }

            if (pointer1 != pointer2) {
                for ( let z = pointer1 ; z <= pointer2 ; z++) {
                    strArr[z] = -1;
                }
                strArr[i] = '.';
            }
        }
    }

    for ( let i = 0 ; i < strArr.length ; i++ ) {
        if ( strArr[i] != -1)
            ans += strArr[i];
    }

    return ans;
}

function deleteUnwantedLetters(id) {
    let strArr = id.split("");
    let newArr = '';
    for (let i = 0; i < strArr.length ; i++) {
        let letter = strArr[i];
        if ( letter === '.' || letter === '-' || letter === '_' ) {
            newArr += letter;
        } else if ( isLetter(letter) ) {
            newArr += letter;
        } else if ( !isNaN(letter)) {
            newArr += letter;
        }
    }
    return newArr;    
}

function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
}


alert(solution("...!@BaT#*..y.abcdefghijklm"));