var frequencySort = function(s) {

	let seen = {};

	for (let char of s) {
		seen[char] ? seen[char]++ : seen[char] = 1;
	}

	let sortedArr = Object.keys(seen).sort( (a,b) => seen[b] - seen[a]);

	let result = "";

	for (let char of sortedArr) 
		result += char.repeat(seen[char]);

	return result;
};
