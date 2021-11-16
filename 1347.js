var minSteps = function(s, t) {
    
    const sMap = new Map();
    const tMap = new Map();
    
    for (let i = 0 ; i < s.length ; i++) {
        let letter = s.charAt(i);
        if(!sMap.has(letter)) {
            sMap.set(letter, 1);
        } else {
            let num = sMap.get(letter);
            sMap.set(letter, num+1);
        }
    }
    
    for (let i = 0 ; i < t.length ; i++) {
        let letter = t.charAt(i);
        if(!tMap.has(letter)) {
            tMap.set(letter, 1);
        } else {
            let num = tMap.get(letter);
            tMap.set(letter, num+1);
        }
    }
    
    let ans = 0;
    
    for (const c of tMap.keys()) {
         
        if (!sMap.has(c)) { 
            ans += tMap.get(c);
            continue;
        }
        
        let t_num = tMap.get(c);
        let s_num = sMap.get(c);
        
        if (t_num > s_num ) ans += t_num - s_num;
    }
    return ans;
};
