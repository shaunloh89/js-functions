function findLongestWord(wordArray) {
	var lengthArray = [];
	for (var i = 0; i < wordArray.length; i++) {
		lengthArray.push(wordArray[i].length);
	}
	/*
	//The following returns the longest word in the array.
	return wordArray[lengthArray.indexOf(Math.max(...lengthArray))];
	*/

	// The following returns the length of the longest word in the array.
	return lengthArray[lengthArray.indexOf(Math.max(...lengthArray))];

}

console.log(findLongestWord(["short", "supercalifragilisticexpialidocious", "fantastic"]));

function altFindLongestWord(wordArray) {
	var lengthArray = [];
	var longest = -Infinity;
	for (var i = 0; i < wordArray.length; i++) {
		lengthArray.push(wordArray[i].length);
		if (lengthArray[i] > longest) {
			longest = lengthArray[i];
		}
	}
	return longest;
}

console.log(altFindLongestWord(["short", "supercalifragilisticexpialidocious", "fantastic"]));