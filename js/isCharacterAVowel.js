function isCharacterAVowel(character) {
	var vowels = ["a", "e", "i", "o", "u"];
	return vowels.includes(character);
}

console.log(isCharacterAVowel("e"));

function altIsCharacterAVowel(character) {
	var vowels = ["a", "e", "i", "o", "u"];
	for (var i = 0; i < vowels.length; i++ ) {
		if (vowels[i] === character) {
			return true;
		} 	
	}
	return false;
}

/*

# Explanation

1. If a match is not found, loop moves to next iteration. 
2. Once a match is found, loop returns `true` and terminates.
3. If no match was found by the end of the loop, it terminates and moves to next statement, hence returning `false`.

*/

console.log(altIsCharacterAVowel("x"));