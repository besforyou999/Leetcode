var countConsistentStrings = function(allowed, words) {
    const map = new Map()
    let count = 0
    
    for(const letter of allowed) {
        map.set(letter, true)
    }
    
    for(const word of words) {
        let currentMatch = 0
        
        for(const letter of word) {
            if(!map.has(letter)) {
                break
            }
            
            currentMatch++
        }
        
        if(currentMatch === word.length) {
            count++
        }
    }
    
    return count
};


