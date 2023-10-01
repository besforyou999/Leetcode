let f = ["/a","/a/b","/c/d","/c/d/e","/c/f"];

var removeSubfolders = function(folder) {
    
    let mat = new Array(26);
    for (let i = 0 ; i < 26 ; i++) mat[i] = new Array(51);
    
    for (const loc of folder) {
        let str = loc.split('/');
        let index = str[1].charCodeAt(0) - 97;
        
        if( mat[index].length < str.length ) {
            mat[index] = new Array(51);
            for (let i = 0 ; i < str.length ; i++) mat[index][i] = str[i]; 
        }
        
    }
    
    let ans = [];
    
    for (let i = 0 ; i < 26 ; i++) {
        if (mat[i] == null || mat[i] == undefined ) continue;      
        let arr = mat[i], str;
        for (let j = 0 ; j < arr.length ; j++) {
            let num = arr[j];
            str += "/";
            str += String(num);
            ans.push(str);
        }
    }
    
    return ans;
};


alert(removeSubfolders(f));