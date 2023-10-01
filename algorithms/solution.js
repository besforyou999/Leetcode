var canBeTypedWords = function(text, brokenLetters) {
    
    const mySet = new Set();
   
	const blArr = brokenLetters.split('');	

    for (let i = 0 ; i < blArr.length ; i++) {
        mySet.add(blArr[i]);
    }
    
    const wordArr = text.split(' ');

	let ans = 0;

    for (let i = 0 ; i < wordArr.length ; i++) {
        let word = wordArr[i];
        let check = true;
        for (let j = 0 ; j < word.length ; j++) {
            let letter = word.charAt(j);
			console.log(letter);
            if (mySet.has(letter)) {
                check = false;
                break;
            }
        }
        if (check) ans++;
    }
    return ans;
};


let text = "hello world";
let brokenLetters = "ad";

console.log(canBeTypedWords(text,brokenLetters));
