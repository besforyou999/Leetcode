var minAddToMakeValid = function(s) {

    const stack = new Array();

    for ( let i = 0 ; i < s.length ; i++) {
        let ch = s[i];
        if ( ch == "(" ) {
            stack.push(ch);
        } 
        else if ( stack.length != 0 ) {
            let top = stack[stack.length - 1];
            if ( top == "(" )
                stack.pop();
            else
                stack.push(ch);
        } 
        else if ( stack.length == 0 ) {
            stack.push(ch);
        }        
    }
    return stack.length;
};


console.log(minAddToMakeValid("((("));